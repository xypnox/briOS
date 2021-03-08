import * as React from 'react'
import type { App } from '../types'
import Offer from './Offer'

type Props = {
  app: App
}

function AppIconSvg({ name }: { name: string }) {
  switch (name) {
    case 'windows':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M5 8.1005L13.9218 6.88545L13.9256 15.4912L5.00815 15.542L5 8.1005ZM13.9175 16.4827L13.9244 25.096L5.00692 23.87L5.00642 16.425L13.9175 16.4827ZM14.999 6.7265L26.8285 5V15.3818L14.999 15.4757V6.7265ZM26.8313 16.5638L26.8285 26.8988L14.999 25.2292L14.9824 16.5444L26.8313 16.5638Z" />
        </svg>
      )
    case 'macos':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path d="M28.25 5.5H18.4033C18.8817 4.67167 19.395 3.80834 19.99 2.89834C20.0363 2.83407 20.069 2.76105 20.0862 2.68373C20.1033 2.6064 20.1046 2.5264 20.0898 2.44858C20.075 2.37077 20.0446 2.29678 20.0003 2.23112C19.956 2.16546 19.8988 2.10951 19.8321 2.06668C19.7655 2.02385 19.6909 1.99504 19.6127 1.982C19.5346 1.96896 19.4547 1.97196 19.3777 1.99083C19.3008 2.0097 19.2285 2.04403 19.1653 2.09174C19.1021 2.13945 19.0492 2.19954 19.01 2.26834C18.275 3.435 17.6333 4.485 17.0617 5.5H3.75C3.59529 5.5 3.44692 5.56146 3.33752 5.67086C3.22812 5.78025 3.16667 5.92863 3.16667 6.08334V25.9167C3.16667 26.0714 3.22812 26.2198 3.33752 26.3291C3.44692 26.4385 3.59529 26.5 3.75 26.5H17.75C18.0113 27.6116 18.4029 28.6885 18.9167 29.7083C18.955 29.775 19.006 29.8334 19.0669 29.8803C19.1278 29.9273 19.1973 29.9617 19.2715 29.9818C19.3458 30.0018 19.4232 30.007 19.4994 29.9972C19.5756 29.9873 19.6492 29.9625 19.7158 29.9242C19.7825 29.8859 19.8409 29.8348 19.8878 29.7739C19.9348 29.713 19.9692 29.6435 19.9893 29.5693C20.0093 29.4951 20.0145 29.4176 20.0046 29.3414C19.9948 29.2652 19.97 29.1916 19.9317 29.125C19.5252 28.2857 19.2084 27.4058 18.9867 26.5H28.25C28.4047 26.5 28.5531 26.4385 28.6625 26.3291C28.7719 26.2198 28.8333 26.0714 28.8333 25.9167V6.08334C28.8333 5.92863 28.7719 5.78025 28.6625 5.67086C28.5531 5.56146 28.4047 5.5 28.25 5.5ZM9 9.58334C9 9.42863 9.06146 9.28025 9.17085 9.17086C9.28025 9.06146 9.42862 9 9.58333 9C9.73804 9 9.88642 9.06146 9.99581 9.17086C10.1052 9.28025 10.1667 9.42863 10.1667 9.58334V11.9167C10.1667 12.0714 10.1052 12.2198 9.99581 12.3291C9.88642 12.4385 9.73804 12.5 9.58333 12.5C9.42862 12.5 9.28025 12.4385 9.17085 12.3291C9.06146 12.2198 9 12.0714 9 11.9167V9.58334ZM16 22.4167C12.8788 22.4192 9.7983 21.7089 6.99333 20.34C6.92439 20.3063 6.86276 20.2593 6.81196 20.2018C6.76116 20.1443 6.72219 20.0773 6.69728 20.0047C6.67236 19.9322 6.66198 19.8554 6.66674 19.7788C6.6715 19.7022 6.69129 19.6273 6.725 19.5583C6.75871 19.4894 6.80566 19.4278 6.86318 19.377C6.92071 19.3262 6.98767 19.2872 7.06026 19.2623C7.13284 19.2374 7.20962 19.227 7.28622 19.2317C7.36281 19.2365 7.43772 19.2563 7.50667 19.29C10.1518 20.581 13.0566 21.2514 16 21.25C16.3967 21.25 16.7817 21.25 17.1667 21.25C17.1667 21.46 17.1667 21.67 17.1667 21.88C17.1667 22.09 17.1667 22.2417 17.1667 22.4167C16.7933 22.3933 16.3967 22.4167 16 22.4167ZM27.6667 25.3333H18.695C18.4823 24.3235 18.3613 23.2966 18.3333 22.265C20.6466 22.0036 22.8989 21.3528 24.995 20.34C25.0639 20.3063 25.1256 20.2593 25.1764 20.2018C25.2272 20.1443 25.2661 20.0773 25.2911 20.0047C25.316 19.9322 25.3263 19.8554 25.3216 19.7788C25.3168 19.7022 25.297 19.6273 25.2633 19.5583C25.2296 19.4894 25.1827 19.4278 25.1251 19.377C25.0676 19.3262 25.0007 19.2872 24.9281 19.2623C24.8555 19.2374 24.7787 19.227 24.7021 19.2317C24.6255 19.2365 24.5506 19.2563 24.4817 19.29C22.5454 20.224 20.4679 20.8311 18.3333 21.0867C18.3996 19.6161 18.5829 18.1531 18.8817 16.7117C18.9006 16.628 18.9008 16.5412 18.8824 16.4574C18.8639 16.3736 18.8272 16.2949 18.7748 16.2269C18.7224 16.159 18.6557 16.1034 18.5794 16.0642C18.5031 16.0249 18.4191 16.003 18.3333 16H14.32C14.9458 12.7207 16.1086 9.56719 17.7617 6.66667H27.6667V25.3333Z" />
            <path d="M21.25 12.5C21.4047 12.5 21.5531 12.4385 21.6625 12.3291C21.7719 12.2197 21.8333 12.0714 21.8333 11.9167V9.58333C21.8333 9.42862 21.7719 9.28025 21.6625 9.17085C21.5531 9.06146 21.4047 9 21.25 9C21.0953 9 20.9469 9.06146 20.8375 9.17085C20.7281 9.28025 20.6667 9.42862 20.6667 9.58333V11.9167C20.6667 12.0714 20.7281 12.2197 20.8375 12.3291C20.9469 12.4385 21.0953 12.5 21.25 12.5Z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(2 2)"
              />
            </clipPath>
          </defs>
        </svg>
      )
    case 'ios':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.96 3.68C7.2528 3.68 4.24 6.6928 4.24 10.4V21.6C4.24 25.3072 7.2528 28.32 10.96 28.32H22.16C25.8672 28.32 28.88 25.3072 28.88 21.6V10.4C28.88 6.6928 25.8672 3.68 22.16 3.68H10.96ZM9.0672 12.1192C9.4592 12.1192 9.7504 12.3992 9.7504 12.7688C9.7504 13.1328 9.4592 13.4128 9.0672 13.4128C8.6696 13.4128 8.3784 13.1328 8.3784 12.7688C8.3784 12.3992 8.6696 12.1192 9.0672 12.1192ZM14.9024 12.4384C16.9464 12.4384 18.2064 13.8664 18.2064 16.1568C18.2064 18.4416 16.9576 19.8808 14.9024 19.8808C12.836 19.8808 11.5816 18.4472 11.5816 16.1568C11.5816 13.8608 12.864 12.4384 14.9024 12.4384ZM22.1432 12.4384C23.5824 12.4384 24.6352 13.2784 24.7024 14.4768H23.6272C23.5208 13.8216 22.9552 13.4128 22.1264 13.4128C21.2528 13.4128 20.676 13.8272 20.676 14.4712C20.676 14.9752 21.0456 15.2664 21.9752 15.4848L22.7536 15.6752C24.2152 16.0168 24.8144 16.6048 24.8144 17.6744C24.8144 19.0352 23.7616 19.8864 22.076 19.8864C20.5024 19.8864 19.444 19.0744 19.3656 17.8032H20.4576C20.5528 18.4752 21.2136 18.9064 22.16 18.9064C23.0448 18.9064 23.6944 18.4472 23.6944 17.8144C23.6944 17.2768 23.2856 16.952 22.3448 16.728L21.4264 16.5096C20.144 16.2072 19.556 15.5856 19.556 14.544C19.556 13.2784 20.592 12.4384 22.1432 12.4384ZM14.9024 13.4632C13.564 13.4632 12.7128 14.5104 12.7128 16.1568C12.7128 17.7976 13.536 18.856 14.9024 18.856C16.252 18.856 17.0808 17.7976 17.0808 16.1568C17.0808 14.5104 16.252 13.4632 14.9024 13.4632ZM8.5408 14.3536H9.5936V19.7128H8.5408V14.3536Z" />
        </svg>
      )
    case 'android':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M24.0665 11.3204L26.6363 5.94492C26.7813 5.64358 26.6936 5.26078 26.4474 5.08567C26.2012 4.91056 25.8809 5.01237 25.7392 5.31372L23.1357 10.7584C21.1493 9.66293 18.9134 9.05209 16.5088 9.05209C14.1043 9.05209 11.8684 9.66293 9.88198 10.7584L7.27845 5.31372C7.13344 5.01237 6.81643 4.91056 6.56687 5.08567C6.31731 5.26078 6.23299 5.64358 6.37801 5.94492L8.94781 11.3204C4.51642 14.2198 1.51494 19.636 1.0192 25.9766H31.9985C31.5027 19.636 28.5012 14.2198 24.0665 11.3204ZM9.39635 20.7233C8.67802 20.7233 8.09796 20.0188 8.09796 19.1555C8.09796 18.2881 8.68139 17.5876 9.39635 17.5876C10.1147 17.5876 10.6947 18.2921 10.6947 19.1555C10.6981 20.0188 10.1147 20.7233 9.39635 20.7233ZM23.6179 20.7233C22.8996 20.7233 22.3196 20.0188 22.3196 19.1555C22.3196 18.2881 22.903 17.5876 23.6179 17.5876C24.3363 17.5876 24.9163 18.2921 24.9163 19.1555C24.9197 20.0188 24.3363 20.7233 23.6179 20.7233Z" />
        </svg>
      )
    case 'linux':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M25.6127 23.27C24.9089 22.9818 24.6078 22.5993 24.6369 22.0285C24.6669 21.3623 24.289 20.8744 24.1095 20.6816C24.2179 20.2674 24.5348 18.8345 24.1098 17.5898C23.6531 16.2576 22.2587 14.223 20.82 12.2229C20.231 11.4016 20.2031 10.5088 20.1709 9.47495C20.1401 8.4889 20.1053 7.3712 19.5554 6.1287C18.9575 4.7758 17.7578 4 16.2638 4C15.375 4 14.4627 4.27777 13.7606 4.76202C12.3229 5.75421 12.513 7.91746 12.6387 9.34889C12.656 9.5449 12.6722 9.73006 12.6816 9.88814C12.7653 11.2901 12.6892 12.029 12.5895 12.2535C12.5251 12.4003 12.2078 12.818 11.8721 13.2602C11.5248 13.7175 11.1311 14.2359 10.8084 14.719C10.4234 15.3003 10.1126 16.1888 9.81198 17.048C9.59204 17.6767 9.3843 18.2706 9.18207 18.6255C8.79878 19.3082 8.89415 19.9448 8.97378 20.239C8.82868 20.3398 8.61905 20.5382 8.44208 20.9123C8.2282 21.3687 7.79423 21.614 6.89183 21.7875C6.47713 21.8723 6.19118 22.0467 6.04167 22.3057C5.82409 22.6827 5.9426 23.1565 6.05072 23.4802C6.21046 23.9561 6.11092 24.2573 5.92993 24.8042C5.88823 24.9304 5.84093 25.0733 5.79301 25.2309C5.71755 25.4797 5.74478 25.7058 5.87375 25.9031C6.21455 26.4241 7.20902 26.6078 8.23277 26.7287C8.84402 26.8013 9.51304 27.0457 10.1601 27.2823C10.7941 27.5139 11.4497 27.7535 12.0456 27.8263C12.1361 27.8377 12.2258 27.8434 12.3123 27.8434C13.2121 27.8434 13.6186 27.2464 13.7475 27.0011C14.0706 26.9352 15.1853 26.724 16.334 26.6957C17.481 26.6629 18.5908 26.8894 18.9051 26.9598C19.004 27.149 19.2645 27.5811 19.6798 27.8037C19.9081 27.9285 20.2258 28 20.5512 28C20.5512 28 20.5512 28 20.5512 28C20.8987 28 21.5598 27.9179 22.083 27.3674C22.6049 26.8144 23.9087 26.1084 24.8609 25.5929C25.0733 25.4779 25.2721 25.3702 25.4464 25.273C25.9812 24.9765 26.2731 24.5529 26.2471 24.1107C26.2253 23.7435 25.9823 23.4213 25.6127 23.27ZM13.7723 23.1635C13.7058 22.6946 13.1024 22.2294 12.4038 21.6909C11.8325 21.2504 11.1849 20.7513 11.0066 20.3286C10.6379 19.4566 10.9285 17.9232 11.4352 17.1337C11.6856 16.7383 11.8901 16.1388 12.0879 15.559C12.3015 14.933 12.5223 14.2857 12.7694 14.0023C13.1605 13.5599 13.522 12.6992 13.5861 12.0208C13.9524 12.3705 14.5206 12.8142 15.0455 12.8142C15.1263 12.8142 15.2048 12.8037 15.2798 12.7825C15.6389 12.6788 16.1671 12.3735 16.678 12.0785C17.1184 11.824 17.6615 11.5102 17.8659 11.4816C18.2163 11.9847 20.2524 16.4905 20.4604 17.9376C20.625 19.0825 20.4511 20.029 20.3637 20.3997C20.2934 20.3901 20.2095 20.3823 20.1214 20.3823C19.5542 20.3823 19.4041 20.6918 19.365 20.8767C19.2644 21.3569 19.2538 22.8925 19.2527 23.2376C19.0476 23.4981 18.0106 24.725 16.5217 24.9456C15.9153 25.0337 15.3489 25.0784 14.8386 25.0784C14.4023 25.0784 14.1239 25.0448 14.0083 25.0272L13.2601 24.1711C13.5551 24.0255 13.8501 23.7181 13.7723 23.1635ZM14.7217 9.04782C14.6983 9.0579 14.6754 9.06868 14.6528 9.08016C14.6505 9.02949 14.6452 8.97811 14.6371 8.92656C14.5554 8.4564 14.2437 8.11512 13.8959 8.11512C13.8702 8.11512 13.8443 8.11709 13.8159 8.12142C13.609 8.15588 13.4468 8.31129 13.3579 8.53162C13.4358 8.04816 13.7098 7.6902 14.0348 7.6902C14.4164 7.6902 14.7388 8.20451 14.7388 8.81325C14.7388 8.88997 14.7332 8.9663 14.7217 9.04782ZM17.6872 9.41034C17.7221 9.29908 17.741 9.17868 17.741 9.05373C17.741 8.5018 17.3908 8.0694 16.9438 8.0694C16.5069 8.0694 16.1515 8.51093 16.1515 9.05373C16.1515 9.09071 16.1533 9.12777 16.1568 9.16476C16.1336 9.15586 16.111 9.14721 16.089 9.13887C16.0387 8.9866 16.0133 8.82773 16.0133 8.66555C16.0133 8.00559 16.4351 7.46861 16.9536 7.46861C17.4721 7.46861 17.894 8.00559 17.894 8.66555C17.894 8.9401 17.8182 9.20213 17.6872 9.41034ZM17.3048 10.6949C17.2974 10.7282 17.2815 10.743 17.1057 10.8345C17.0169 10.8806 16.9064 10.9382 16.7682 11.0224L16.6758 11.0783C16.3045 11.3034 15.4353 11.8305 15.1993 11.8614C15.039 11.883 14.9398 11.8208 14.7169 11.6693C14.6666 11.6351 14.6131 11.5988 14.5561 11.5622C14.1542 11.2985 13.8957 11.008 13.8665 10.8945C13.9975 10.7932 14.3223 10.5398 14.4886 10.3897C14.826 10.0759 15.1657 9.86501 15.3337 9.86501C15.3426 9.86501 15.3507 9.86564 15.359 9.86721C15.5565 9.90207 16.0437 10.0965 16.3995 10.2385C16.564 10.3041 16.706 10.3608 16.8059 10.3966C17.1208 10.5048 17.2849 10.6431 17.3048 10.6949ZM20.1335 25.3601C20.3111 24.559 20.5157 23.4692 20.4825 22.8267C20.4749 22.6807 20.462 22.5218 20.4495 22.3682C20.4261 22.081 20.3914 21.6541 20.4272 21.5275C20.4343 21.5242 20.4422 21.5214 20.4509 21.5189C20.4524 21.8863 20.5322 22.6189 21.1181 22.8744C21.2927 22.9506 21.4923 22.9892 21.7112 22.9892C22.2981 22.9892 22.9494 22.7012 23.2161 22.4345C23.3732 22.2774 23.5053 22.0853 23.5978 21.9331C23.6181 21.9923 23.6305 22.0698 23.624 22.1695C23.5891 22.7113 23.8524 23.4301 24.3535 23.6949L24.4264 23.7332C24.6049 23.8269 25.0789 24.0758 25.0866 24.1938C25.0865 24.1939 25.0825 24.2077 25.0561 24.2323C24.9374 24.3408 24.5194 24.5542 24.1153 24.7606C23.3984 25.1267 22.5857 25.5416 22.2208 25.9254C21.7069 26.4662 21.1257 26.8294 20.7748 26.8294C20.7325 26.8294 20.6941 26.8241 20.6598 26.8132C20.2787 26.6944 19.9649 26.1444 20.1335 25.3601ZM7.14103 23.3164C7.10216 23.1344 7.07147 22.9908 7.10444 22.8517C7.12837 22.7486 7.63725 22.6381 7.85459 22.591C8.16014 22.5247 8.47615 22.4561 8.68279 22.3307C8.96221 22.1614 9.11353 21.8493 9.24699 21.5739C9.34362 21.3747 9.4434 21.1688 9.56214 21.1012C9.56883 21.0972 9.57906 21.0927 9.59857 21.0927C9.82103 21.0927 10.2878 21.5603 10.5568 21.9789C10.625 22.0844 10.7514 22.2958 10.8976 22.5406C11.3348 23.2723 11.9336 24.2744 12.2463 24.6102C12.5281 24.9122 12.9843 25.4927 12.872 25.9905C12.7899 26.3768 12.3525 26.6909 12.2494 26.7604C12.2119 26.7689 12.1656 26.7732 12.111 26.7732C11.5125 26.7732 10.3278 26.2753 9.69127 26.0078L9.59708 25.9682C9.24164 25.8191 8.66139 25.7253 8.10025 25.6345C7.65377 25.5621 7.04236 25.4632 6.94101 25.3738C6.85886 25.2817 6.95415 24.9821 7.03819 24.7178C7.0987 24.5278 7.16118 24.3314 7.19541 24.1258C7.24396 23.7978 7.18683 23.5309 7.14103 23.3164Z" />
        </svg>
      )
  }
}

export const AppRow = ({ app }: Props) => {
  const sourcesKeys = app.sources && Object.keys(app.sources)

  const renderSourceIcon = (key: string) => {
    const sourceUrl = app.sources[key]
    const renderMatch = key.toLowerCase()
    const hideOnMobile =
      renderMatch === 'linux' ||
      renderMatch === 'macos' ||
      renderMatch === 'windows'
    return (
      <div
        className={`flex ${hideOnMobile ? 'hidden' : 'block'
          } flex-x-3 md:block`}
        key={key}
      >
        <a
          className="items-center space-y-1 text-tertiary hover:text-gray-1000 dark:hover:text-gray-50"
          href={sourceUrl}
        >
          <AppIconSvg name={renderMatch} />
        </a>
      </div>
    )
  }

  return (
    <div className="p-4 pr-6 -mx-4 rounded-md md:hover:bg-gray-100 md:dark:hover:bg-gray-800">
      <div className="flex items-center justify-between">
        <a
          className="flex items-center h-full space-x-3"
          href={app.url}
          title={`go to: ${app.name}`}
        >
          {app.image && (
            <img
              className="w-8 h-8 transition-shadow rounded-md shadow-sm hover:shadow"
              alt={app.name}
              src={`/static/img/security/${app.image}`}
            />
          )}
          <p className="font-medium text-primary">{app.name}</p>
        </a>
        {sourcesKeys && (
          <div className="flex items-center space-x-5">
            {sourcesKeys.map(renderSourceIcon)}
          </div>
        )}
      </div>
      {app.offer && <Offer offer={app.offer} />}
    </div>
  )
}
