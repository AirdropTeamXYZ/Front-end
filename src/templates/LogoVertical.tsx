type ILogoProps = {
  xl?: boolean;
  className?: string;
};

const LogoVertical = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`inline-flex items-center text-white-900 ${fontStyle} ${props.className}`}
    >
      <svg
        width="186"
        height="46"
        viewBox="0 0 186 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.732 20.0928H64.2568L65.1309 15.6637H51.5324L48.1323 33.1791H53.1825L54.3818 26.9483H61.9316L62.6812 23.0958H55.1324L55.732 20.0928Z"
          fill="white"
        />
        <path
          d="M69.6055 28.75L72.1551 15.6637H67.1059L63.7058 33.1791H77.0544L77.9049 28.75H69.6055Z"
          fill="white"
        />
        <path
          d="M87.6035 15.6637L77.804 33.1782H83.4039L84.755 30.4507H90.9473L91.328 33.1782H96.5271L93.2025 15.6637H87.6026H87.6035ZM86.6395 26.6482L89.528 20.8185H89.6034L90.4166 26.6482H86.6395Z"
          fill="white"
        />
        <path
          d="M106.277 20.068C106.693 19.918 107.402 19.8425 108.401 19.8425C108.885 19.8425 109.418 19.8588 110.002 19.8925C110.585 19.9261 111.26 19.9925 112.026 20.0926L113.276 20.2426L114.501 16.4893L113.276 16.1391C112.843 16.0054 112.368 15.889 111.852 15.789C111.335 15.6889 110.798 15.6053 110.24 15.5389C109.681 15.4725 109.144 15.4388 108.627 15.4388C107.21 15.4388 105.931 15.6098 104.79 15.9518C103.648 16.2937 102.698 16.8321 101.94 17.5652C101.182 18.2991 100.686 19.2668 100.453 20.4673C100.253 21.535 100.257 22.4272 100.466 23.1447C100.674 23.8623 101.128 24.4707 101.828 24.9709C102.527 25.4712 103.519 25.9304 104.802 26.347C105.668 26.6307 106.29 26.8645 106.665 27.0473C107.04 27.231 107.269 27.3938 107.353 27.5347C107.437 27.6766 107.461 27.8394 107.428 28.0222C107.378 28.3223 107.166 28.5479 106.79 28.6979C106.415 28.848 105.836 28.9235 105.053 28.9235C104.42 28.9235 103.732 28.8944 102.991 28.8362C102.249 28.778 101.57 28.6988 100.953 28.5988L99.129 28.3733L97.8287 31.9766L99.079 32.4267C100.012 32.7441 100.929 32.9861 101.828 33.1525C102.728 33.3189 103.628 33.4026 104.528 33.4026C105.978 33.4026 107.269 33.2398 108.402 32.9151C109.535 32.5895 110.481 32.0266 111.24 31.2262C111.998 30.4259 112.502 29.3246 112.752 27.9231C112.936 27.0563 112.931 26.2806 112.739 25.5957C112.548 24.9118 112.119 24.307 111.452 23.7814C110.785 23.2557 109.818 22.8101 108.552 22.4426C107.619 22.1425 106.931 21.9133 106.49 21.7542C106.048 21.5959 105.773 21.4413 105.665 21.2913C105.557 21.1412 105.518 20.9575 105.552 20.741C105.618 20.4409 105.86 20.2154 106.277 20.0653V20.068Z"
          fill="white"
        />
        <path
          d="M128.826 15.6637L127.601 21.9445H121.526L122.751 15.6637H117.701L114.301 33.1791H119.351L120.626 26.5736H126.7L125.425 33.1791H130.476L133.875 15.6637H128.826Z"
          fill="white"
        />
        <path
          d="M149.637 25.3475C150.278 24.4471 150.707 23.4049 150.924 22.2199C151.174 20.902 151.124 19.7552 150.774 18.7793C150.424 17.8035 149.791 17.0404 148.874 16.4902C147.958 15.94 146.758 15.6644 145.274 15.6644H136.925L133.525 33.1789H138.574L139.524 28.175H142.848C144.515 28.175 145.902 27.9295 147.011 27.4365C148.119 26.9445 148.993 26.2479 149.636 25.3475H149.637ZM145.824 21.8943C145.674 22.6118 145.399 23.1293 144.999 23.4458C144.599 23.7632 144.024 23.9215 143.275 23.9215H140.375L141.15 19.8434H144.1C144.749 19.8434 145.237 20.0017 145.562 20.3191C145.887 20.6365 145.974 21.1612 145.824 21.8952V21.8943Z"
          fill="#FFAF1D"
        />
        <path
          d="M156.773 15.6637L146.973 33.1782H152.573L153.924 30.4507H160.116L160.497 33.1782H165.696L162.372 15.6637H156.772H156.773ZM155.809 26.6482L158.697 20.8185H158.773L159.586 26.6482H155.809Z"
          fill="#FFAF1D"
        />
        <path
          d="M185.558 20.0553C185.049 18.6793 184.146 17.6034 182.845 16.8276C181.545 16.0519 179.904 15.6644 177.921 15.6644H170.996L167.596 33.1789H174.445C177.561 33.1789 180.086 32.5205 182.019 31.2026C183.952 29.8848 185.202 27.7912 185.769 24.9228C186.136 23.0547 186.065 21.4323 185.557 20.0562L185.558 20.0553ZM180.646 24.6963C180.462 25.6467 180.149 26.4225 179.708 27.0236C179.266 27.6239 178.678 28.0623 177.945 28.3369C177.212 28.6125 176.303 28.7498 175.22 28.7498H173.496L175.17 20.0926H176.92C178.603 20.0926 179.724 20.46 180.282 21.1931C180.84 21.927 180.961 23.0948 180.645 24.6963H180.646Z"
          fill="#FFAF1D"
        />
        <path
          d="M17.2509 12.8468C16.3405 13.2655 15.9422 14.3434 16.3605 15.2546L22.4573 28.5283L21.2315 16.8089C21.1594 16.1159 21.5363 15.4536 22.1687 15.1624L27.9816 12.488L25.6351 21.3056L39.6763 2.52722L27.4842 8.13724L17.2501 12.8461L17.2509 12.8468Z"
          fill="#FFAF1D"
        />
        <path
          d="M8.80588 12.5625C13.1204 6.85103 20.288 4.57307 26.8147 6.21259L32.877 3.42294C23.4711 -1.53941 11.5929 0.895288 4.97185 9.66065C-1.70374 18.4982 -0.740437 30.7309 6.7603 38.426L9.68782 34.5116C4.29869 28.469 3.74143 19.2673 8.80665 12.5617L8.80588 12.5625Z"
          fill="#FFAF1D"
        />
        <path
          d="M38.4352 7.57336L35.5077 11.4878C40.8968 17.5296 41.4541 26.7321 36.3889 33.4377C32.0743 39.1491 24.9067 41.4271 18.38 39.7875L12.3177 42.5772C21.7236 47.5395 33.6018 45.1048 40.2229 36.3395C46.8985 27.5019 45.9352 15.2693 38.4345 7.57413L38.4352 7.57336Z"
          fill="#FFAF1D"
        />
        <path
          d="M27.9449 33.1525C28.8552 32.7338 29.2536 31.6559 28.8352 30.7447L22.7384 17.4711L23.9642 29.1905C24.0364 29.8835 23.6595 30.5457 23.027 30.8369L17.2142 33.5113L19.5607 24.6937L5.51788 43.4706L17.71 37.8606L27.9441 33.151L27.9449 33.1525Z"
          fill="#FFAF1D"
        />
      </svg>
    </span>
  );
};

export { LogoVertical };
