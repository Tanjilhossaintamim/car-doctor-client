import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-12 flex justify-between items-center">
      {/* left side */}
      <div className="flex flex-col">
        {/* logo */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="55"
            viewBox="0 0 101 55"
            fill="none"
          >
            <path
              d="M101 36.7241C100.464 35.0984 99.9564 33.7249 99.5616 32.2953C99.3077 31.3984 98.8001 31.1461 97.9257 31.1741C95.1617 31.2863 92.3695 31.1461 89.6336 31.4825C86.8978 31.8188 85.0363 31.006 83.7953 28.5673C83.4287 27.8386 82.8082 27.1939 82.2723 26.5492C81.539 25.6802 81.3979 24.8113 81.821 23.7181C83.0338 20.6348 84.0774 17.4954 85.2902 14.3841C85.685 13.375 85.4876 12.7583 84.585 12.1697C82.921 11.0485 81.3697 9.84319 79.7621 8.72198C77.5057 7.18033 78.1262 7.0682 75.8699 8.75001C73.3879 10.6 70.9059 12.422 68.4521 14.328C67.6624 14.9447 66.9009 15.0288 65.9701 14.6924C64.4753 14.1318 62.9805 13.5712 61.4292 13.2348C60.1036 12.9265 59.4831 12.1697 59.1447 10.9364C58.2421 7.79699 57.2268 4.68564 56.3242 1.54626C56.0704 0.649299 55.6191 0.200816 54.6884 0.172786C52.3756 0.144756 50.0911 0.144756 47.8065 0.0326353C46.5373 -0.0234251 45.8322 0.425058 45.4655 1.68641C44.6194 4.7417 43.6041 7.74093 42.7297 10.7962C42.3913 12.0015 41.8272 12.7023 40.5298 12.9826C38.8939 13.347 37.2581 13.8515 35.7068 14.4682C34.6351 14.8886 33.8453 14.6924 32.9992 14.0477C30.2352 11.9455 27.4429 9.89925 24.7071 7.76896C23.9738 7.20836 23.4097 7.20836 22.7046 7.74093C20.7303 9.17047 18.7278 10.572 16.7253 11.9174C15.8791 12.478 15.8509 13.0667 16.1894 13.9356C17.4304 17.1591 18.615 20.4106 19.7149 23.6621C19.9124 24.2507 19.7149 25.1477 19.3765 25.6802C18.3611 27.2499 17.1201 28.6795 16.0766 30.2211C15.4561 31.1181 14.7227 31.4825 13.6228 31.4264C10.1536 31.2863 6.68449 31.2022 3.18715 31.1741C2.70767 31.1741 1.94615 31.3984 1.80513 31.7347C1.15643 33.3044 0.676954 34.9302 0.0564575 36.7241C0.817976 36.7241 1.32565 36.7241 1.86154 36.7241C7.02294 36.7241 12.2126 36.612 17.374 36.7802C19.4047 36.8362 20.7585 36.4438 21.4354 34.4256C21.661 33.7809 22.1687 33.2203 22.5354 32.6597C31.0531 19.5977 48.5116 14.328 62.9241 20.3825C70.3982 23.5219 76.0109 28.6234 79.8749 35.715C80.1005 36.1635 80.721 36.6961 81.1441 36.6961C87.6593 36.7521 94.2028 36.7241 101 36.7241Z"
              fill="white"
            />
            <path
              d="M101 36.7241C94.1745 36.7241 87.6593 36.7522 81.1159 36.6681C80.6928 36.6681 80.0723 36.1355 79.8467 35.687C75.9827 28.5954 70.37 23.4939 62.8958 20.3545C48.5116 14.328 31.053 19.5977 22.4789 32.6317C22.084 33.2204 21.5764 33.7529 21.3789 34.3976C20.702 36.4158 19.3482 36.8362 17.3175 36.7522C12.1561 36.584 6.99469 36.6961 1.80508 36.6961C1.2974 36.6961 0.789723 36.6961 0 36.6961C0.592292 34.9302 1.07177 33.2764 1.74867 31.7067C1.8897 31.3704 2.65121 31.1461 3.13069 31.1461C6.59983 31.1742 10.0972 31.2582 13.5663 31.3984C14.6945 31.4545 15.3996 31.0901 16.0201 30.1931C17.0919 28.6514 18.3047 27.2219 19.32 25.6522C19.6585 25.1196 19.8559 24.2227 19.6585 23.634C18.5585 20.3545 17.3457 17.131 16.1329 13.9076C15.7945 13.0386 15.8509 12.45 16.6688 11.8894C18.6995 10.544 20.6738 9.11442 22.6481 7.71291C23.3532 7.20837 23.9173 7.18034 24.6506 7.74094C27.3865 9.87123 30.2069 11.9174 32.9427 14.0197C33.7889 14.6644 34.5786 14.8886 35.6504 14.4401C37.2016 13.8235 38.8375 13.3189 40.4733 12.9546C41.7707 12.6742 42.3348 11.9735 42.6733 10.7682C43.5194 7.71291 44.5348 4.71369 45.4091 1.6584C45.7757 0.397042 46.4809 -0.0514402 47.7501 0.00462013C50.0346 0.116741 52.3474 0.116741 54.6319 0.144771C55.5909 0.144771 56.0139 0.593253 56.2678 1.51825C57.1703 4.65763 58.1857 7.76897 59.0882 10.9083C59.4267 12.1417 60.0472 12.8985 61.3728 13.2068C62.924 13.5712 64.4189 14.1038 65.9137 14.6644C66.8444 15.0288 67.6059 14.9167 68.3957 14.3C70.8495 12.422 73.3314 10.572 75.8134 8.722C78.0698 7.04019 77.4775 7.15231 79.7056 8.69397C81.3133 9.81517 82.8927 11.0205 84.5286 12.0856C85.4311 12.6742 85.6286 13.2909 85.2337 14.3C84.0491 17.3833 82.9773 20.5227 81.7646 23.634C81.3415 24.7272 81.4825 25.5962 82.2158 26.4651C82.7517 27.1098 83.344 27.7545 83.7389 28.4833C84.9799 30.9219 86.8414 31.7348 89.5772 31.3984C92.313 31.062 95.1052 31.2022 97.8693 31.0901C98.7436 31.062 99.2513 31.3423 99.5051 32.2113C99.9846 33.7249 100.492 35.0984 101 36.7241Z"
              fill="#FF3811"
            />
            <path
              d="M72.3443 46.1983C69.0161 42.9187 65.6598 39.6112 62.3035 36.2756C61.7112 35.687 61.3445 36.0794 60.9215 36.4998C59.342 38.0976 57.7626 39.6953 56.1549 41.2369C55.1396 42.218 54.0396 43.171 52.9678 44.124C53.0524 44.2642 53.1371 44.3763 53.2217 44.5165C56.3524 43.8998 59.0882 44.5445 61.3445 46.7589C63.5727 48.9733 64.165 51.7482 63.6009 54.7475C66.5342 51.8884 69.3828 49.0854 72.3443 46.1983Z"
              fill="white"
            />
            <path
              d="M48.0321 44.3483C47.609 43.8718 47.4116 43.5634 47.1577 43.3112C44.9014 41.0688 42.5886 38.8824 40.3887 36.5839C39.599 35.7711 39.1195 35.7991 38.358 36.5839C35.4247 39.5551 32.4915 42.4703 29.4736 45.3574C28.7121 46.0862 28.8813 46.5346 29.53 47.1793C31.8992 49.5058 34.2401 51.8604 36.6093 54.1869C36.8067 54.3831 37.0888 54.4952 37.4272 54.7194C36.4401 47.9922 41.1784 43.3672 48.0321 44.3483Z"
              fill="white"
            />
            <path
              d="M37.0606 33.3604C33.4786 36.9763 30.0095 40.5081 26.5685 43.9838C26.8224 44.3202 27.1608 44.7967 27.4711 45.1891C31.1095 41.5732 34.6068 38.1255 38.3298 34.4536C37.9349 34.1172 37.4836 33.7248 37.0606 33.3604Z"
              fill="white"
            />
            <path
              d="M77.0827 41.5733C76.998 41.4332 76.9416 41.265 76.8288 41.1249C73.6417 37.9575 70.4828 34.8181 67.2957 31.6507C66.7599 31.1181 66.365 31.0901 65.7727 31.6507C65.1522 32.2673 65.265 32.6878 65.8291 33.2484C68.6778 36.0234 71.47 38.8264 74.2904 41.6294C74.7417 42.0779 75.2212 42.4983 75.8699 43.115C76.2929 42.5824 76.6314 42.162 77.0827 41.5733Z"
              fill="white"
            />
            <path
              d="M74.8263 43.8157C71.5546 40.5642 68.3393 37.3968 65.124 34.1733C64.5881 33.6408 64.1368 33.2203 63.4035 34.0052C62.6984 34.762 63.0933 35.2105 63.6574 35.743C66.5342 38.5741 69.3829 41.4051 72.2315 44.2362C73.5007 45.5255 73.5289 45.5255 74.8263 43.8157Z"
              fill="white"
            />
            <path
              d="M35.876 32.3233C34.6068 30.7817 34.635 30.7817 33.2812 32.0991C30.5172 34.846 27.7532 37.565 25.0173 40.3119C23.6917 41.6293 23.7199 41.7975 25.2994 42.6945C28.8249 39.2468 32.3223 35.7991 35.876 32.3233Z"
              fill="white"
            />
            <path
              d="M72.3443 46.1983C69.3828 49.1134 66.5342 51.8884 63.6009 54.7755C64.165 51.7763 63.5727 49.0293 61.3445 46.7869C59.0882 44.5445 56.3242 43.9278 53.2217 44.5445C53.1371 44.4043 53.0524 44.2922 52.9678 44.1521C54.0396 43.199 55.1114 42.274 56.1549 41.265C57.7626 39.6953 59.342 38.1256 60.9215 36.5279C61.3445 36.1074 61.7112 35.715 62.3035 36.3036C65.6598 39.5831 69.0161 42.8907 72.3443 46.1983ZM64.6445 41.6574C64.0522 42.4422 63.3471 42.9748 63.4035 43.3672C63.4881 43.8437 64.2214 44.2361 64.6727 44.6566C65.0675 44.2361 65.7444 43.8157 65.7726 43.3672C65.829 42.9187 65.2085 42.4142 64.6445 41.6574Z"
              fill="#444444"
            />
            <path
              d="M48.0321 44.3483C41.1502 43.3672 36.4401 47.9922 37.4272 54.7475C37.0888 54.5232 36.8067 54.4111 36.6093 54.2149C34.2401 51.8884 31.8992 49.5338 29.53 47.2073C28.8813 46.5627 28.7121 46.1142 29.4736 45.3854C32.4633 42.4983 35.4247 39.5551 38.358 36.6119C39.1195 35.8271 39.599 35.7991 40.3887 36.6119C42.5886 38.9104 44.9014 41.0968 47.1577 43.3392C47.4116 43.5634 47.6372 43.8718 48.0321 44.3483ZM38.1887 43.4513C37.399 42.8066 36.8913 42.1059 36.5247 42.1619C36.017 42.246 35.5939 42.9468 35.1427 43.3672C35.5657 43.7877 35.9324 44.4604 36.4119 44.5445C36.8067 44.6005 37.3426 43.9839 38.1887 43.4513Z"
              fill="#444444"
            />
            <path
              d="M37.0606 33.3604C37.4836 33.7248 37.9349 34.0892 38.3298 34.4536C34.635 38.1255 31.1377 41.5732 27.4711 45.1891C27.1608 44.7687 26.7942 44.2922 26.5685 43.9838C30.0095 40.5081 33.5068 36.9763 37.0606 33.3604Z"
              fill="#444444"
            />
            <path
              d="M77.0827 41.5733C76.6314 42.162 76.2929 42.5824 75.8699 43.143C75.2212 42.5264 74.7417 42.1059 74.2904 41.6574C71.47 38.8544 68.6777 36.0514 65.8291 33.2764C65.2368 32.7158 65.124 32.2953 65.7727 31.6787C66.3368 31.1181 66.7598 31.1461 67.2957 31.6787C70.4546 34.8461 73.6417 37.9855 76.8288 41.1529C76.9416 41.237 76.998 41.4332 77.0827 41.5733Z"
              fill="#444444"
            />
            <path
              d="M74.8263 43.8157C73.5571 45.5255 73.5289 45.5255 72.2315 44.2362C69.3829 41.4051 66.5342 38.546 63.6574 35.743C63.0933 35.2105 62.6984 34.762 63.4035 34.0052C64.1368 33.2203 64.5881 33.6408 65.124 34.1733C68.3393 37.3968 71.5546 40.5642 74.8263 43.8157Z"
              fill="#444444"
            />
            <path
              d="M35.876 32.3233C32.3223 35.8271 28.8249 39.2468 25.2994 42.7225C23.7199 41.8255 23.6917 41.6574 25.0173 40.3399C27.7814 37.593 30.5454 34.8741 33.2812 32.1271C34.635 30.7817 34.635 30.7817 35.876 32.3233Z"
              fill="#444444"
            />
            <path
              d="M64.6445 41.6574C65.1804 42.4423 65.8009 42.9188 65.7727 43.3673C65.7445 43.8157 65.0676 44.2362 64.6727 44.6566C64.2214 44.2362 63.4881 43.8718 63.4035 43.3673C63.3471 42.9748 64.0522 42.4423 64.6445 41.6574Z"
              fill="white"
            />
            <path
              d="M38.1888 43.4513C37.3426 43.9839 36.835 44.6006 36.3837 44.5165C35.9042 44.4604 35.5376 43.7597 35.1145 43.3392C35.5658 42.9187 35.9888 42.218 36.4965 42.1339C36.8914 42.1059 37.3991 42.8347 38.1888 43.4513Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="text-color-dark-2 text-xl text-center font-bold">
          Car Doctor
        </span>
      </div>
      {/* middle */}
      <div>
        <ul className="flex items-center space-x-7 text-color-dark-2 text-lg font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact </NavLink>
          </li>
        </ul>
      </div>
      {/* right */}
      <div className="flex items-center gap-6">
        {/*bag icon  */}
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6516 3.34835C13.9484 2.64509 12.9945 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34833 3.34835C8.64507 4.05161 8.24998 5.00544 8.24998 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.24998C4.09219 21.7502 3.93613 21.7171 3.79193 21.6531C3.64774 21.589 3.51863 21.4953 3.41301 21.3781C3.30738 21.2608 3.2276 21.1227 3.17884 20.9726C3.13008 20.8226 3.11343 20.6639 3.12999 20.507L4.39399 8.507C4.42314 8.23056 4.55361 7.9747 4.76024 7.78876C4.96686 7.60281 5.23501 7.49995 5.51298 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.62498 10.5C8.62498 10.5995 8.58548 10.6948 8.51515 10.7652C8.44482 10.8355 8.34944 10.875 8.24998 10.875C8.15053 10.875 8.05515 10.8355 7.98482 10.7652C7.91449 10.6948 7.87498 10.5995 7.87498 10.5C7.87498 10.4005 7.91449 10.3052 7.98482 10.2348C8.05515 10.1645 8.15053 10.125 8.24998 10.125C8.34944 10.125 8.44482 10.1645 8.51515 10.2348C8.58548 10.3052 8.62498 10.4005 8.62498 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8494 10.875 15.75 10.875C15.6505 10.875 15.5551 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5551 10.1645 15.6505 10.125 15.75 10.125C15.8494 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z"
              stroke="#444444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.51029 2.99921 6.60256 3.78941 5.19599 5.19599C3.78941 6.60256 2.99921 8.51029 2.99921 10.4995C2.99921 12.4887 3.78941 14.3964 5.19599 15.803C6.60256 17.2096 8.51029 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803V15.803Z"
              stroke="#444444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button className="text-lg font-semibold text-color-orange border border-color-orange px-4 py-2 rounded hover:bg-color-orange hover:text-white transition-colors duration-300">
          Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
