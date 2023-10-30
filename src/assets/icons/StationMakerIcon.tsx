import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type StationMakerIconProps = {
  size: number
}

const StationMakerIcon = ({ size = 32 }: StationMakerIconProps) => (
    <View>
      <Svg width={size} height={size} viewBox="0 0 119 166">
        <Path
          d="M6.26035 135.241C2.25962 138.413 -0.0205891 142.538 0.000140115 146.56C0.0208693 151.68 3.77285 156.738 9.82577 159.723C15.0702 162.334 21.061 163.164 26.7615 163.827C37.4577 165.05 47.926 165.651 58.1247 165.651C68.8624 165.651 79.2685 164.988 89.2599 163.64C96.681 162.645 104.371 161.153 110.424 156.986C113.596 154.81 116.042 151.825 117.369 148.55C118.82 144.943 118.716 141.253 117.099 138.185C114.135 132.588 107.046 129.955 101.221 128.276C94.9605 126.494 88.4722 125.105 81.8804 124.131C88.2649 115.404 94.3179 105.516 98.4637 98.7581C99.3343 97.3278 100.163 96.0011 100.868 94.861C107.895 83.5636 111.689 71.6029 112.166 59.3519C112.601 47.9094 110.01 36.4462 104.62 26.2475C99.4379 16.4218 90.2964 8.52402 78.8539 4.00506C67.4528 -0.493171 54.7873 -1.21869 43.1583 1.91141C33.3326 4.56474 24.5642 9.80922 17.848 17.0644C11.0488 24.4026 6.59202 33.5441 4.95441 43.4941C1.96941 61.6321 7.06879 82.4235 19.2575 101.992L19.5063 102.386C24.5849 110.532 29.4356 118.326 34.2447 124.98C28.71 126.058 23.3619 127.489 18.2833 129.23C14.3862 130.557 9.90868 132.339 6.26035 135.241ZM22.1182 100.727L21.8694 100.333C10.0745 81.387 5.1617 61.3834 8.0016 43.9709C11.111 25.0244 24.8751 10.0372 43.946 4.89641C48.4235 3.69412 53.0461 3.09297 57.7101 3.09297C64.4886 3.09297 71.3085 4.35745 77.6931 6.88641C88.4515 11.1152 97.0334 18.5155 101.863 27.6778C112.663 48.1996 111.336 72.0796 98.2149 93.2027C97.4894 94.3635 96.681 95.7109 95.8103 97.1205C91.2707 104.542 84.3886 115.777 77.3614 124.96C71.7852 132.256 63.9911 140.963 58.5808 140.963C53.5643 140.963 47.8845 137.045 41.2512 128.981C35.0532 121.457 28.7722 111.382 22.1182 100.727ZM36.2969 127.737C37.1468 128.857 37.9967 129.935 38.8466 130.95C46.2262 139.905 52.5071 144.072 58.5808 144.072C64.0118 144.072 70.9353 138.475 79.7452 126.97C86.7724 127.924 93.696 129.354 100.35 131.261C105.595 132.754 111.917 135.076 114.342 139.636C117.078 144.818 113.472 151.12 108.662 154.416C103.148 158.209 95.8725 159.598 88.8453 160.552C69.588 163.143 48.8173 163.205 27.1139 160.738C21.7036 160.116 16.0238 159.329 11.2146 156.945C6.30181 154.499 3.13024 150.436 3.10952 146.56C3.10952 143.492 4.95441 140.258 8.18816 137.687C11.4634 135.076 15.6299 133.438 19.2575 132.173C24.6678 130.287 30.3891 128.815 36.2969 127.737ZM58.0211 93.1612C64.1362 93.1612 70.1476 91.8553 75.4336 89.3263C82.5437 85.9267 88.7832 80.0811 92.9912 72.9088C97.1785 65.7365 99.2099 57.4241 98.671 49.5678C97.9662 39.141 92.9705 29.1495 85.3214 22.8271C74.1898 13.6441 59.4514 10.286 45.8945 13.8514C39.966 15.4061 34.68 18.1838 30.2025 22.0809C25.4348 26.2267 21.8072 31.4505 19.4441 37.6278C16.6042 44.9866 16.086 53.5063 17.9931 61.6114C19.8794 69.7165 24.1082 77.1168 29.9123 82.4857C35.7165 87.8338 43.4277 91.4821 51.6572 92.7052C53.7716 93.0161 55.9067 93.1612 58.0211 93.1612ZM20.9988 60.8859C19.2575 53.3819 19.7136 45.5048 22.3255 38.7264C26.5957 27.6156 35.2397 19.8421 46.6615 16.8364C49.9782 15.9658 53.357 15.5512 56.7359 15.5512C66.2298 15.5512 75.6823 18.9093 83.3314 25.211C90.3379 30.9944 94.919 40.1775 95.5616 49.7751C96.0591 57.0303 94.1727 64.7001 90.2964 71.3541C86.42 78.0082 80.6573 83.3978 74.0862 86.5279C67.515 89.658 59.7209 90.7566 52.0925 89.6165C44.4849 88.4764 37.3334 85.1183 31.9852 80.1847C26.6579 75.2305 22.7608 68.3898 20.9988 60.8859ZM78.771 47.3497C78.1906 46.1475 77.0297 45.4012 75.6823 45.4012C75.6616 45.4012 75.6616 45.4012 75.6409 45.4012C74.024 45.4219 72.6351 45.4634 71.4121 45.4841C68.4064 45.5463 66.1262 45.6085 62.623 45.4634C62.9132 43.4112 63.7631 38.3947 66.064 26.0402C66.3749 24.4233 65.525 22.8686 63.9911 22.2467C62.4778 21.6248 60.7781 22.1431 59.866 23.5112C54.5593 31.4505 44.8373 45.878 39.5099 53.3405C38.7637 54.3977 38.66 55.7658 39.2612 56.9059C39.8623 58.046 41.0024 58.7301 42.2876 58.7301C42.3084 58.7301 42.3084 58.7301 42.3291 58.7301C43.6972 58.7093 44.9617 58.6679 46.1847 58.6471C48.3406 58.5849 50.4135 58.5228 53.0668 58.5642C51.678 61.8602 50.2062 65.7158 48.6722 69.758C47.5321 72.7844 46.3298 75.8938 45.0653 79.1276C44.4435 80.6822 45.0032 82.4028 46.4335 83.2734C47.0139 83.6258 47.6358 83.8123 48.2576 83.8123C49.1905 83.8123 50.0818 83.4185 50.7659 82.693C60.6329 71.8931 67.4943 63.8709 78.2735 51.0188C79.1648 49.9616 79.3514 48.5728 78.771 47.3497ZM75.9311 49.0081C65.1726 61.8187 58.332 69.7994 48.5064 80.5786C48.4442 80.6408 48.3406 80.7652 48.1125 80.6408C47.9052 80.5164 47.9674 80.3506 47.9882 80.2677C49.2734 77.0132 50.4757 73.8831 51.6158 70.8566C53.4814 65.9438 55.2434 61.3212 56.8602 57.7143C57.0675 57.2376 57.0261 56.6986 56.7566 56.2633C56.4871 55.828 56.0103 55.5585 55.4921 55.5378C53.9374 55.4756 52.59 55.4548 51.3463 55.4548C49.4185 55.4548 47.7394 55.4963 46.1225 55.5585C44.9202 55.6 43.6558 55.6207 42.3084 55.6414C42.184 55.6414 42.1011 55.5792 42.0389 55.4756C41.9767 55.3719 41.9974 55.2683 42.0596 55.1646C47.4077 47.6607 57.1297 33.2125 62.4571 25.2525C62.4986 25.1903 62.6022 25.0452 62.8302 25.1488C63.0583 25.2525 63.0375 25.3976 63.0168 25.4805C61.9596 31.1188 61.1304 35.7621 60.5086 39.2654C60.1147 41.5041 59.8245 43.2661 59.638 44.5099C59.2856 46.7901 59.2441 47.2876 59.7209 47.9094C59.9903 48.2618 60.4257 48.4899 60.861 48.5106C65.4628 48.7593 67.9918 48.6971 71.495 48.6142C72.6973 48.5935 74.0862 48.552 75.6823 48.5313C75.7238 48.5313 75.8689 48.5313 75.9518 48.6971C76.014 48.8008 76.014 48.9044 75.9311 49.0081Z"
          fill="#0C2964"
        />
      </Svg>
    </View>
  )

export default StationMakerIcon