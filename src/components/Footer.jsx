import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer--container'>
                <div className='main'>
                    <svg width="191" height="65" viewBox="0 0 191 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 28.5C34.5333 28.5 33.3333 29.7 33.3333 31.1667V36.5H14.6666V31.1667C14.6666 29.7 13.4666 28.5 12 28.5C10.5333 28.5 9.33331 29.7 9.33331 31.1667V37.8333C9.33331 40.0333 11.1333 41.8333 13.3333 41.8333V43.1667C13.3333 43.9 13.9333 44.5 14.6666 44.5C15.4 44.5 16 43.9 16 43.1667V41.8333H32V43.1667C32 43.9 32.6 44.5 33.3333 44.5C34.0666 44.5 34.6666 43.9 34.6666 43.1667V41.8333C36.8666 41.8333 38.6666 40.0333 38.6666 37.8333V31.1667C38.6666 29.7 37.4666 28.5 36 28.5Z" fill="black" />
                        <path d="M17.3333 31.1667V33.8333H30.6666V31.1667C30.6666 28.6867 32.3733 26.62 34.6666 26.02V24.5C34.6666 22.3 32.8666 20.5 30.6666 20.5H17.3333C15.1333 20.5 13.3333 22.3 13.3333 24.5V26.02C15.6266 26.62 17.3333 28.6867 17.3333 31.1667Z" fill="#F2C229" />
                        <circle cx="22" cy="26" r="1" fill="#122025" />
                        <circle cx="26" cy="26" r="1" fill="#122025" />
                        <path d="M51.76 47V19H63.28C65.76 19 67.88 19.4 69.64 20.2C71.4267 21 72.8 22.1467 73.76 23.64C74.72 25.1333 75.2 26.9067 75.2 28.96C75.2 31.0133 74.72 32.7867 73.76 34.28C72.8 35.7733 71.4267 36.92 69.64 37.72C67.88 38.52 65.76 38.92 63.28 38.92H54.64L56.96 36.48V47H51.76ZM56.96 37.04L54.64 34.52H63.04C65.3333 34.52 67.0533 34.04 68.2 33.08C69.3733 32.0933 69.96 30.72 69.96 28.96C69.96 27.1733 69.3733 25.8 68.2 24.84C67.0533 23.88 65.3333 23.4 63.04 23.4H54.64L56.96 20.84V37.04ZM89.8747 47.28C87.5014 47.28 85.4214 46.8133 83.6347 45.88C81.8747 44.92 80.5014 43.6133 79.5147 41.96C78.5547 40.3067 78.0747 38.4267 78.0747 36.32C78.0747 34.1867 78.5414 32.3067 79.4747 30.68C80.4347 29.0267 81.7414 27.7333 83.3947 26.8C85.0747 25.8667 86.9814 25.4 89.1147 25.4C91.1947 25.4 93.048 25.8533 94.6747 26.76C96.3014 27.6667 97.5814 28.9467 98.5147 30.6C99.448 32.2533 99.9147 34.2 99.9147 36.44C99.9147 36.6533 99.9014 36.8933 99.8747 37.16C99.8747 37.4267 99.8614 37.68 99.8347 37.92H82.0347V34.6H97.1947L95.2347 35.64C95.2614 34.4133 95.008 33.3333 94.4747 32.4C93.9414 31.4667 93.208 30.7333 92.2747 30.2C91.368 29.6667 90.3147 29.4 89.1147 29.4C87.888 29.4 86.808 29.6667 85.8747 30.2C84.968 30.7333 84.248 31.48 83.7147 32.44C83.208 33.3733 82.9547 34.48 82.9547 35.76V36.56C82.9547 37.84 83.248 38.9733 83.8347 39.96C84.4214 40.9467 85.248 41.7067 86.3147 42.24C87.3814 42.7733 88.608 43.04 89.9947 43.04C91.1947 43.04 92.2747 42.8533 93.2347 42.48C94.1947 42.1067 95.048 41.52 95.7947 40.72L98.4747 43.8C97.5147 44.92 96.3014 45.7867 94.8347 46.4C93.3947 46.9867 91.7414 47.28 89.8747 47.28ZM116.838 25.4C118.544 25.4 120.064 25.7333 121.398 26.4C122.758 27.0667 123.824 28.0933 124.598 29.48C125.371 30.84 125.758 32.6 125.758 34.76V47H120.758V35.4C120.758 33.5067 120.304 32.0933 119.398 31.16C118.518 30.2267 117.278 29.76 115.678 29.76C114.504 29.76 113.464 30 112.558 30.48C111.651 30.96 110.944 31.68 110.438 32.64C109.958 33.5733 109.718 34.76 109.718 36.2V47H104.718V25.64H109.478V31.4L108.638 29.64C109.384 28.28 110.464 27.24 111.878 26.52C113.318 25.7733 114.971 25.4 116.838 25.4ZM132.1 47V25.64H137.1V47H132.1ZM134.62 22.12C133.687 22.12 132.914 21.8267 132.3 21.24C131.714 20.6533 131.42 19.9467 131.42 19.12C131.42 18.2667 131.714 17.56 132.3 17C132.914 16.4133 133.687 16.12 134.62 16.12C135.554 16.12 136.314 16.4 136.9 16.96C137.514 17.4933 137.82 18.1733 137.82 19C137.82 19.88 137.527 20.6267 136.94 21.24C136.354 21.8267 135.58 22.12 134.62 22.12ZM151.703 47.28C149.356 47.28 147.543 46.68 146.263 45.48C144.983 44.2533 144.343 42.4533 144.343 40.08V20.92H149.343V39.96C149.343 40.9733 149.596 41.76 150.103 42.32C150.636 42.88 151.369 43.16 152.303 43.16C153.423 43.16 154.356 42.8667 155.103 42.28L156.503 45.84C155.916 46.32 155.196 46.68 154.343 46.92C153.489 47.16 152.609 47.28 151.703 47.28ZM140.823 29.8V25.8H155.063V29.8H140.823ZM169.513 47.28C167.326 47.28 165.379 46.8133 163.673 45.88C161.966 44.92 160.619 43.6133 159.633 41.96C158.646 40.3067 158.153 38.4267 158.153 36.32C158.153 34.1867 158.646 32.3067 159.633 30.68C160.619 29.0267 161.966 27.7333 163.673 26.8C165.379 25.8667 167.326 25.4 169.513 25.4C171.726 25.4 173.686 25.8667 175.393 26.8C177.126 27.7333 178.473 29.0133 179.433 30.64C180.419 32.2667 180.913 34.16 180.913 36.32C180.913 38.4267 180.419 40.3067 179.433 41.96C178.473 43.6133 177.126 44.92 175.393 45.88C173.686 46.8133 171.726 47.28 169.513 47.28ZM169.513 43C170.739 43 171.833 42.7333 172.793 42.2C173.753 41.6667 174.499 40.8933 175.033 39.88C175.593 38.8667 175.873 37.68 175.873 36.32C175.873 34.9333 175.593 33.7467 175.033 32.76C174.499 31.7467 173.753 30.9733 172.793 30.44C171.833 29.9067 170.753 29.64 169.553 29.64C168.326 29.64 167.233 29.9067 166.273 30.44C165.339 30.9733 164.593 31.7467 164.033 32.76C163.473 33.7467 163.193 34.9333 163.193 36.32C163.193 37.68 163.473 38.8667 164.033 39.88C164.593 40.8933 165.339 41.6667 166.273 42.2C167.233 42.7333 168.313 43 169.513 43Z" fill="#122025" />
                    </svg>
                    <p>Sophisticated simplicity for the independent mind</p>
                    <div className='footer--icons'>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5.19298C7.33984 5.19298 5.19296 7.33985 5.19296 10C5.19296 12.6602 7.33984 14.807 10 14.807C12.6602 14.807 14.807 12.6602 14.807 10C14.807 7.33985 12.6602 5.19298 10 5.19298ZM10 13.1242C8.27968 13.1242 6.87577 11.7203 6.87577 10C6.87577 8.2797 8.27968 6.87579 10 6.87579C11.7203 6.87579 13.1242 8.2797 13.1242 10C13.1242 11.7203 11.7203 13.1242 10 13.1242ZM15.0039 3.87579C14.3828 3.87579 13.8812 4.37736 13.8812 4.99845C13.8812 5.61954 14.3828 6.1211 15.0039 6.1211C15.625 6.1211 16.1266 5.62189 16.1266 4.99845C16.1267 4.85097 16.0978 4.7049 16.0415 4.56861C15.9851 4.43232 15.9024 4.30848 15.7982 4.2042C15.6939 4.09991 15.57 4.01723 15.4337 3.96087C15.2975 3.90452 15.1514 3.87561 15.0039 3.87579ZM19.3703 10C19.3703 8.70626 19.382 7.42423 19.3094 6.13282C19.2367 4.63282 18.8945 3.30157 17.7977 2.2047C16.6984 1.10548 15.3695 0.765638 13.8695 0.692982C12.5758 0.620326 11.2937 0.632045 10.0023 0.632045C8.70859 0.632045 7.42656 0.620326 6.13515 0.692982C4.63515 0.765638 3.3039 1.10783 2.20702 2.2047C1.1078 3.30392 0.767958 4.63282 0.695302 6.13282C0.622645 7.42657 0.634364 8.7086 0.634364 10C0.634364 11.2914 0.622645 12.5758 0.695302 13.8672C0.767958 15.3672 1.11015 16.6984 2.20702 17.7953C3.30624 18.8945 4.63515 19.2344 6.13515 19.307C7.4289 19.3797 8.71093 19.368 10.0023 19.368C11.2961 19.368 12.5781 19.3797 13.8695 19.307C15.3695 19.2344 16.7008 18.8922 17.7977 17.7953C18.8969 16.6961 19.2367 15.3672 19.3094 13.8672C19.3844 12.5758 19.3703 11.2938 19.3703 10ZM17.3078 15.5266C17.1367 15.9531 16.9305 16.2719 16.6 16.6C16.2695 16.9305 15.9531 17.1367 15.5266 17.3078C14.2937 17.7977 11.3664 17.6875 10 17.6875C8.63359 17.6875 5.7039 17.7977 4.47109 17.3102C4.04452 17.1391 3.72577 16.9328 3.39765 16.6024C3.06718 16.2719 2.86093 15.9555 2.68983 15.5289C2.20233 14.2938 2.31249 11.3664 2.31249 10C2.31249 8.6336 2.20233 5.70392 2.68983 4.47111C2.86093 4.04454 3.06718 3.72579 3.39765 3.39767C3.72812 3.06954 4.04452 2.86095 4.47109 2.68986C5.7039 2.20236 8.63359 2.31251 10 2.31251C11.3664 2.31251 14.2961 2.20236 15.5289 2.68986C15.9555 2.86095 16.2742 3.0672 16.6023 3.39767C16.9328 3.72814 17.1391 4.04454 17.3102 4.47111C17.7977 5.70392 17.6875 8.6336 17.6875 10C17.6875 11.3664 17.7977 14.2938 17.3078 15.5266Z" fill="#58666B" />
                            </svg>
                        </span>

                        <span>
                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.15201 19.5999H6.66801V10.8399H9.60801L10.052 7.4319H6.66801V5.2479C6.66801 4.2639 6.94401 3.5919 8.36001 3.5919H10.172V0.531902C9.86001 0.495902 8.79201 0.399902 7.54401 0.399902C4.92801 0.399902 3.15201 1.9959 3.15201 4.9119V7.4319H0.200012V10.8399H3.15201V19.5999Z" fill="#58666B" />
                            </svg>
                        </span>

                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.429 6.969H11.143V8.819C11.678 7.755 13.05 6.799 15.111 6.799C19.062 6.799 20 8.917 20 12.803V20H16V13.688C16 11.475 15.465 10.227 14.103 10.227C12.214 10.227 11.429 11.572 11.429 13.687V20H7.429V6.969ZM0.57 19.83H4.57V6.799H0.57V19.83ZM5.143 2.55C5.14315 2.88528 5.07666 3.21724 4.94739 3.52659C4.81812 3.83594 4.62865 4.11651 4.39 4.352C3.9064 4.83262 3.25181 5.10165 2.57 5.1C1.88939 5.09954 1.23631 4.8312 0.752 4.353C0.514211 4.11671 0.325386 3.83582 0.196344 3.52643C0.0673015 3.21704 0.000579132 2.88522 0 2.55C0 1.873 0.27 1.225 0.753 0.747C1.23689 0.268158 1.89024 -0.000299211 2.571 2.50265e-07C3.253 2.50265e-07 3.907 0.269 4.39 0.747C4.872 1.225 5.143 1.873 5.143 2.55Z" fill="#58666B" />
                            </svg>
                        </span>

                        <span>
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8594 0.897753H17.5352V2.03213H12.8594V0.897753ZM8.17422 5.38603C9.20781 4.8915 9.74922 4.13916 9.74922 2.97666C9.74922 0.677441 8.03828 0.119629 6.0625 0.119629H0.625V11.6603H6.21484C8.31016 11.6603 10.2766 10.6524 10.2766 8.30869C10.2766 6.86025 9.59219 5.78916 8.17422 5.38603ZM3.16094 2.08838H5.53984C6.45625 2.08838 7.27891 2.34385 7.27891 3.40791C7.27891 4.3876 6.63906 4.78135 5.73203 4.78135H3.16094V2.08838ZM5.86797 9.70088H3.15859V6.52275H5.92188C7.0375 6.52275 7.74297 6.98916 7.74297 8.17041C7.74297 9.33291 6.90156 9.70088 5.86797 9.70088ZM19.3633 7.60322C19.3633 5.13057 17.9172 3.07041 15.3016 3.07041C12.7586 3.07041 11.0289 4.98525 11.0289 7.49541C11.0289 10.097 12.6672 11.8829 15.3016 11.8829C17.2961 11.8829 18.5875 10.9853 19.2086 9.07041H17.1859C16.9656 9.78525 16.0703 10.1603 15.3742 10.1603C14.0289 10.1603 13.3258 9.37275 13.3258 8.03447H19.3469C19.3539 7.89619 19.3633 7.75088 19.3633 7.60322ZM13.3258 6.58603C13.3984 5.48682 14.132 4.8001 15.2289 4.8001C16.382 4.8001 16.9586 5.47744 17.0594 6.58603H13.3258Z" fill="#02A39A" />
                            </svg>
                        </span>

                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C19.994 15.52 15.52 19.994 10 20ZM5.12 16.545L5.115 16.555C6.2375 17.3959 7.55806 17.9328 8.94888 18.1138C10.3397 18.2948 11.7537 18.1137 13.054 17.588C12.6749 15.5493 12.113 13.5489 11.375 11.611C9.67992 12.202 8.13019 13.1473 6.829 14.384C6.18774 14.9912 5.63259 15.6833 5.179 16.441L5.172 16.452V16.442L5.154 16.477L5.142 16.497L5.135 16.51L5.118 16.546L5.12 16.545ZM14.779 11.045C14.287 11.045 13.795 11.079 13.307 11.145C13.9442 12.9255 14.4456 14.7517 14.807 16.608C16.5064 15.383 17.6615 13.5438 18.027 11.481C16.969 11.1891 15.8765 11.0414 14.779 11.042V11.045ZM1.817 9.955V10.011C1.81882 11.9376 2.50052 13.8017 3.742 15.275C5.35028 12.7905 7.72927 10.9023 10.514 9.9L10.633 9.866C10.456 9.475 10.29 9.126 10.124 8.8C7.45593 9.54808 4.6999 9.93652 1.929 9.955H1.817ZM14.466 9.349C15.7068 9.35398 16.9448 9.46708 18.166 9.687C18.1024 7.99541 17.5107 6.3662 16.474 5.028C15.2642 6.38093 13.7585 7.43634 12.074 8.112L12.103 8.1L12.072 8.113C12.2664 8.51867 12.4492 8.92984 12.62 9.346L12.661 9.446C13.261 9.38 13.863 9.347 14.466 9.349ZM6.377 2.677C5.30278 3.20721 4.35816 3.96694 3.60994 4.90248C2.86171 5.83802 2.32816 6.92652 2.047 8.091C4.377 8.055 6.697 7.761 8.962 7.213H8.99L9 7.2L9.054 7.187H9.06L9.1 7.179H9.116L9.137 7.173L9.177 7.163L9.2 7.153L9.222 7.147H9.242C8.36372 5.60898 7.40713 4.11702 6.376 2.677H6.377ZM10 1.839C9.45259 1.83763 8.90635 1.88954 8.369 1.994C9.4166 3.44559 10.3779 4.95754 11.248 6.522C12.8061 5.96705 14.1958 5.02157 15.284 3.776C13.8067 2.5266 11.9348 1.84041 10 1.839Z" fill="#58666B" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='help'>
                    <h3>Help &amp; Information</h3>
                    <a href="#">
                        <p>Pagination</p>
                    </a>
                    <a href="#">
                        <p>Terms &amp; Conditions</p>
                    </a>
                    <a href="#">
                        <p>Contact</p>
                    </a>
                    <a href="#">
                        <p>Home Page</p>
                    </a>
                    <a href="#">
                        <p>Terms of Use</p>
                    </a>
                </div>
                <div className='about--us'>
                    <h3>About Us</h3>
                    <a href="#">
                        <p>Help Center</p>
                    </a>
                    <a href="#">
                        <p>Address Store</p>
                    </a>
                    <a href="#">
                        <p>Privacy Policy</p>
                    </a>
                    <a href="#">
                        <p>Receivers &amp; Amplifiers</p>
                    </a>
                    <a href="#">
                        <p>Clothing</p>
                    </a>
                </div>
                <div className='categories'>
                    <h3>Categories</h3>
                    <a href="#">
                        <p>Delivery</p>
                    </a>
                    <a href="#">
                        <p>Legal Notice</p>
                    </a>
                    <a href="#">
                        <p>Documentation</p>
                    </a>
                    <a href="#">
                        <p>Secure Payment</p>
                    </a>
                    <a href="#">
                        <p>Stores</p>
                    </a>
                </div>
            </div>
            <div className='copyright'>
                <p>&copy; 2022 | <strong>Penito</strong> by Ibraheem | Ingenious_02 </p>
            </div>
        </footer>
    )
}

export default Footer