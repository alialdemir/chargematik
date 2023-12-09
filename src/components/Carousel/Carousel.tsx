import { memo, useRef, useState, useCallback } from 'react'
import { View, FlatList, Dimensions, StyleSheet } from 'react-native'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const Slide = memo(({ data }: any) => <View style={styles.slide}>{data.slider}</View>)

export type SliderItem = {
  id: number
  slider: any
}

type CarouselProps = {
  sliders: SliderItem[]
}

const Carousel = ({ sliders }: CarouselProps) => {
  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  indexRef.current = index
  const onScroll = useCallback((event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width
    const index = event.nativeEvent.contentOffset.x / slideSize
    const roundIndex = Math.round(index)

    const distance = Math.abs(roundIndex - index)

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = distance > 0.4

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex)
    }
  }, [])

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s: any) => String(s.id), []),
    getItemLayout: useCallback(
      (_: any, index: number) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  }

  const renderItem = useCallback(({ item }: any) => <Slide data={item} />, [])

  return (
    <>
      <FlatList
        data={sliders}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination sliders={sliders} index={index} />
    </>
  )
}

const Pagination = ({ sliders, index }: any) => (
  <View style={styles.pagination} pointerEvents="none">
    {sliders.map((_, i) => (
      <View
        key={i}
        style={[
          styles.paginationDot,
          index === i ? styles.paginationDotActive : styles.paginationDotInactive,
        ]}
      />
    ))}
  </View>
)

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pagination: {
    position: 'absolute',
    bottom: 70,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },

  paginationDotActive: {
    width: 30,
    borderRadius: 8,
    backgroundColor: '#0C2964',
  },

  paginationDotInactive: { backgroundColor: '#F39404' },

  carousel: { flex: 1 },
})

export default Carousel
