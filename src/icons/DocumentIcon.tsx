const DocumentIcon = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="hover-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.0625 10.5H13.5C12.9033 10.5 12.331 10.2629 11.909 9.84099C11.4871 9.41903 11.25 8.84674 11.25 8.25V1.6875C11.25 1.63777 11.2302 1.59008 11.1951 1.55492C11.1599 1.51975 11.1122 1.5 11.0625 1.5H6.75C5.95435 1.5 5.19129 1.81607 4.62868 2.37868C4.06607 2.94129 3.75 3.70435 3.75 4.5V19.5C3.75 20.2956 4.06607 21.0587 4.62868 21.6213C5.19129 22.1839 5.95435 22.5 6.75 22.5H17.25C18.0456 22.5 18.8087 22.1839 19.3713 21.6213C19.9339 21.0587 20.25 20.2956 20.25 19.5V10.6875C20.25 10.6378 20.2302 10.5901 20.1951 10.5549C20.1599 10.5198 20.1122 10.5 20.0625 10.5ZM15.75 18H8.25C8.05109 18 7.86032 17.921 7.71967 17.7803C7.57902 17.6397 7.5 17.4489 7.5 17.25C7.5 17.0511 7.57902 16.8603 7.71967 16.7197C7.86032 16.579 8.05109 16.5 8.25 16.5H15.75C15.9489 16.5 16.1397 16.579 16.2803 16.7197C16.421 16.8603 16.5 17.0511 16.5 17.25C16.5 17.4489 16.421 17.6397 16.2803 17.7803C16.1397 17.921 15.9489 18 15.75 18ZM15.75 14.25H8.25C8.05109 14.25 7.86032 14.171 7.71967 14.0303C7.57902 13.8897 7.5 13.6989 7.5 13.5C7.5 13.3011 7.57902 13.1103 7.71967 12.9697C7.86032 12.829 8.05109 12.75 8.25 12.75H15.75C15.9489 12.75 16.1397 12.829 16.2803 12.9697C16.421 13.1103 16.5 13.3011 16.5 13.5C16.5 13.6989 16.421 13.8897 16.2803 14.0303C16.1397 14.171 15.9489 14.25 15.75 14.25Z"
          fill="white"
        />
        <path
          d="M19.6509 8.84013L12.9098 2.09904C12.8967 2.08601 12.8801 2.07714 12.8619 2.07356C12.8438 2.06997 12.825 2.07183 12.8079 2.07889C12.7908 2.08595 12.7762 2.09791 12.7659 2.11326C12.7556 2.1286 12.7501 2.14665 12.75 2.16513V8.24998C12.75 8.44889 12.829 8.63966 12.9697 8.78031C13.1103 8.92096 13.3011 8.99998 13.5 8.99998H19.5848C19.6033 8.9999 19.6214 8.99436 19.6367 8.98405C19.6521 8.97375 19.664 8.95913 19.6711 8.94205C19.6781 8.92497 19.68 8.90618 19.6764 8.88805C19.6728 8.86991 19.664 8.85324 19.6509 8.84013Z"
          fill="white"
        />
      </svg>

      <style jsx>
        {`
          .hover-icon path:hover {
            fill: #ffc700;
          }
        `}
      </style>
    </>
  );
};

export default DocumentIcon;