import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer>
            <h2>Conçu & Développé par Clément Chrétien</h2>
            <div className={styles.socialMedia}>
                <a href="https://github.com/clement-chretien94" target="_blank" rel="noreferrer">
                    <svg className={styles.github} width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.36189 20.6983C8.36189 20.7991 8.24597 20.8798 8.0998 20.8798C7.93347 20.8949 7.81754 20.8142 7.81754 20.6983C7.81754 20.5975 7.93347 20.5169 8.07964 20.5169C8.23085 20.5017 8.36189 20.5824 8.36189 20.6983ZM6.79435 20.4715C6.75907 20.5723 6.85988 20.6882 7.01109 20.7185C7.14214 20.7689 7.29335 20.7185 7.32359 20.6177C7.35383 20.5169 7.25806 20.4009 7.10685 20.3556C6.97581 20.3203 6.82964 20.3707 6.79435 20.4715ZM9.02218 20.3858C8.87601 20.4211 8.7752 20.5169 8.79032 20.6328C8.80544 20.7336 8.93649 20.7991 9.0877 20.7638C9.23387 20.7285 9.33468 20.6328 9.31956 20.532C9.30443 20.4362 9.16835 20.3707 9.02218 20.3858ZM12.3387 1.07129C5.34778 1.07129 0 6.37875 0 13.3697C0 18.9594 3.51815 23.7427 8.54335 25.4261C9.18851 25.5421 9.41532 25.1439 9.41532 24.8162C9.41532 24.5037 9.4002 22.78 9.4002 21.7215C9.4002 21.7215 5.87198 22.4775 5.13105 20.2195C5.13105 20.2195 4.55645 18.7527 3.72984 18.3747C3.72984 18.3747 2.5756 17.5834 3.81048 17.5985C3.81048 17.5985 5.06552 17.6993 5.75605 18.8989C6.85988 20.8445 8.70968 20.285 9.43044 19.9523C9.54637 19.1459 9.87399 18.5864 10.2369 18.2537C7.41935 17.9412 4.57661 17.533 4.57661 12.6842C4.57661 11.2981 4.95968 10.6025 5.76613 9.71544C5.63508 9.38782 5.20665 8.03701 5.89718 6.29306C6.9506 5.96544 9.375 7.65395 9.375 7.65395C10.3831 7.37169 11.4667 7.22552 12.5403 7.22552C13.6139 7.22552 14.6976 7.37169 15.7056 7.65395C15.7056 7.65395 18.13 5.9604 19.1835 6.29306C19.874 8.04206 19.4456 9.38782 19.3145 9.71544C20.121 10.6076 20.6149 11.3031 20.6149 12.6842C20.6149 17.5481 17.6462 17.9362 14.8286 18.2537C15.2923 18.6519 15.6855 19.408 15.6855 20.5925C15.6855 22.291 15.6704 24.3929 15.6704 24.8062C15.6704 25.1338 15.9022 25.532 16.5423 25.416C21.5827 23.7427 25 18.9594 25 13.3697C25 6.37875 19.3296 1.07129 12.3387 1.07129ZM4.89919 18.4554C4.83367 18.5058 4.84879 18.6217 4.93448 18.7175C5.01512 18.7981 5.13105 18.8334 5.19657 18.7679C5.2621 18.7175 5.24698 18.6015 5.16129 18.5058C5.08065 18.4251 4.96472 18.3898 4.89919 18.4554ZM4.35484 18.0471C4.31956 18.1126 4.36996 18.1933 4.47077 18.2437C4.55141 18.2941 4.65222 18.2789 4.6875 18.2084C4.72278 18.1429 4.67238 18.0622 4.57157 18.0118C4.47077 17.9816 4.39012 17.9967 4.35484 18.0471ZM5.9879 19.8414C5.90726 19.907 5.9375 20.0582 6.05343 20.154C6.16935 20.2699 6.31552 20.285 6.38105 20.2044C6.44657 20.1388 6.41633 19.9876 6.31552 19.8919C6.20464 19.7759 6.05343 19.7608 5.9879 19.8414ZM5.41331 19.1005C5.33266 19.1509 5.33266 19.282 5.41331 19.3979C5.49395 19.5138 5.63004 19.5642 5.69556 19.5138C5.77621 19.4483 5.77621 19.3173 5.69556 19.2013C5.625 19.0854 5.49395 19.035 5.41331 19.1005Z" fill="#C5C6C7"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/clement.chretien94130" target="_blank" rel="noreferrer">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.835 7.08105H12.165C9.25725 7.08105 6.90002 9.43827 6.90002 12.3461V20.8011C6.90002 23.7088 9.25725 26.0661 12.165 26.0661H19.835C22.7428 26.0661 25.1 23.7088 25.1 20.8011V12.3461C25.1 9.43827 22.7428 7.08105 19.835 7.08105Z" stroke="#C5C6C7" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M16 21.2112C18.5626 21.2112 20.64 19.1338 20.64 16.5712C20.64 14.0086 18.5626 11.9312 16 11.9312C13.4374 11.9312 11.36 14.0086 11.36 16.5712C11.36 19.1338 13.4374 21.2112 16 21.2112Z" stroke="#C5C6C7" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M21.555 11.1012C21.9195 11.1012 22.215 10.8058 22.215 10.4412C22.215 10.0767 21.9195 9.78125 21.555 9.78125C21.1905 9.78125 20.895 10.0767 20.895 10.4412C20.895 10.8058 21.1905 11.1012 21.555 11.1012Z" stroke="#C5C6C7" strokeWidth="1.5"/>
                </svg>
                </a>
                <a href="https://twitter.com/clemchret94" target="_blank" rel="noreferrer">
                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.3936 6.0293C26.3936 5.98086 26.35 5.9518 26.3113 5.9857C25.5508 6.64445 23.715 7.17726 23.4825 7.20148C23.4757 7.20456 23.4682 7.20615 23.4607 7.20615C23.4532 7.20615 23.4458 7.20456 23.4389 7.20148C22.0924 5.05086 18.9875 5.63211 18.9875 5.63211C14.4247 6.60086 14.9284 11.2121 15.0156 11.6965C15.0156 11.7207 15.0156 11.7401 14.972 11.7401C9.89579 11.992 5.46376 7.27414 4.96001 6.71711C4.95501 6.71102 4.94872 6.70612 4.9416 6.70276C4.93449 6.69939 4.92671 6.69765 4.91883 6.69765C4.91096 6.69765 4.90318 6.69939 4.89606 6.70276C4.88895 6.70612 4.88266 6.71102 4.87766 6.71711C4.30801 7.77317 4.12737 8.99577 4.36728 10.1714C4.6072 11.3471 5.25243 12.4012 6.19032 13.1496C6.19836 13.1543 6.20503 13.161 6.20967 13.1691C6.2143 13.1772 6.21674 13.1863 6.21674 13.1956C6.21674 13.2049 6.2143 13.2141 6.20967 13.2222C6.20503 13.2302 6.19836 13.2369 6.19032 13.2416C5.52878 13.221 4.87476 13.0951 4.25282 12.8687C4.22376 12.8687 4.18985 12.8687 4.18985 12.9171C4.25766 15.9202 7.20266 17.2765 7.88563 17.5623C7.89532 17.5654 7.90376 17.5716 7.90974 17.5799C7.91572 17.5881 7.91894 17.5981 7.91894 17.6083C7.91894 17.6185 7.91572 17.6284 7.90974 17.6367C7.90376 17.6449 7.89532 17.6511 7.88563 17.6543C7.27358 17.7876 6.64546 17.8317 6.02079 17.7851C6.01238 17.7848 6.00402 17.7864 5.99638 17.79C5.98875 17.7935 5.98206 17.7988 5.97686 17.8054C5.97166 17.812 5.96811 17.8198 5.96648 17.828C5.96485 17.8363 5.96521 17.8448 5.96751 17.8529C6.58266 20.1682 9.60032 21.137 10.1428 21.2968C10.1519 21.2987 10.1603 21.303 10.1673 21.3092C10.1742 21.3154 10.1794 21.3233 10.1823 21.3321C10.1852 21.3409 10.1858 21.3503 10.184 21.3594C10.1822 21.3685 10.178 21.377 10.1719 21.384C8.30704 23.0502 4.63063 23.491 3.87501 23.5685C3.86497 23.5698 3.85551 23.574 3.84776 23.5805C3.84 23.587 3.83426 23.5956 3.83121 23.6053C3.82816 23.6149 3.82792 23.6253 3.83053 23.6351C3.83314 23.6449 3.83849 23.6537 3.84594 23.6605C6.66501 25.598 14.0469 27.2062 19.685 22.3866C21.3518 20.934 22.6689 19.1234 23.5378 17.0903C24.4068 15.0572 24.8051 12.8541 24.7031 10.6454C24.7032 10.6373 24.7055 10.6294 24.7098 10.6226C24.714 10.6157 24.7201 10.6102 24.7273 10.6066C25.7399 10.0119 26.5836 9.16825 27.1783 8.1557C27.1783 8.10726 27.1783 8.0782 27.1056 8.09273C26.6153 8.26502 26.0859 8.29359 25.5799 8.17508C25.5799 8.17508 26.4081 6.74133 26.3936 6.0293Z" stroke="#C5C6C7" strokeWidth="1.45312" strokeLinecap="round"/>
                    </svg>
                </a>
            </div>
        </footer>
    );
}

export default Footer;