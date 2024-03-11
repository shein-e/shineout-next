import React from 'react';

interface IconProps {
  fontSize?: number;
  color?: string;
  style?: React.CSSProperties;
}

const UploadIcon = (props: IconProps) => (
  <svg
    width={props.fontSize || 14}
    height={props.fontSize || 14}
    style={props.style}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 21H21V16C21 15.7348 21.1054 15.4805 21.2929 15.293C21.4805 15.1055 21.7348 15.0002 22 15.0002C22.2652 15.0002 22.5195 15.1055 22.7071 15.293C22.8946 15.4805 23 15.7348 23 16V22C23 22.2652 22.8946 22.5196 22.7071 22.7071C22.5196 22.8946 22.2652 23 22 23H2C1.73478 23 1.48043 22.8946 1.29289 22.7071C1.10536 22.5196 1 22.2652 1 22V16C1.00004 15.7348 1.10542 15.4805 1.29295 15.293C1.48048 15.1055 1.73481 15.0002 2 15.0002C2.26519 15.0002 2.51952 15.1055 2.70705 15.293C2.89458 15.4805 2.99996 15.7348 3 16V21ZM10.97 4.835L6.336 9.468C6.24329 9.56065 6.13323 9.63413 6.01212 9.68424C5.89101 9.73436 5.76122 9.76013 5.63015 9.76008C5.49908 9.76004 5.3693 9.73417 5.24822 9.68397C5.12715 9.63377 5.01715 9.56021 4.9245 9.4675C4.73739 9.28026 4.63233 9.02635 4.63242 8.76165C4.63247 8.63058 4.65833 8.5008 4.70853 8.37973C4.75873 8.25865 4.83229 8.14865 4.925 8.056L11.982 1L11.985 1.003L11.987 1L19.044 8.056C19.1367 8.14871 19.2103 8.25878 19.2604 8.37992C19.3106 8.50105 19.3364 8.63088 19.3364 8.762C19.3364 8.89312 19.3106 9.02295 19.2604 9.14409C19.2103 9.26522 19.1367 9.37529 19.044 9.468C18.9513 9.56071 18.8412 9.63426 18.7201 9.68443C18.5989 9.73461 18.4691 9.76044 18.338 9.76044C18.2069 9.76044 18.0771 9.73461 17.9559 9.68443C17.8348 9.63426 17.7247 9.56071 17.632 9.468L12.97 4.805V18.998C12.97 19.2632 12.8646 19.5176 12.6771 19.7051C12.4896 19.8926 12.2352 19.998 11.97 19.998C11.7048 19.998 11.4504 19.8926 11.2629 19.7051C11.0754 19.5176 10.97 19.2632 10.97 18.998V4.835Z'
      fill='currentColor'
    />
  </svg>
);

const AddIcon = (props: IconProps) => (
  <svg
    width={props.fontSize || 20}
    height={props.fontSize || 20}
    style={props.style}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.0263 3.33484C10.4537 3.3354 10.8055 3.65756 10.8531 4.07207L10.8585 4.16927L10.8516 9.16817H15.8333C16.2935 9.16817 16.6666 9.54127 16.6666 10.0015C16.6666 10.4289 16.3449 10.7811 15.9304 10.8292L15.8333 10.8348H10.8499L10.8433 15.8359C10.8426 16.2962 10.4691 16.6688 10.0088 16.6682C9.58146 16.6676 9.22966 16.3455 9.18207 15.9309L9.17659 15.8337L9.18325 10.8348H4.16659C3.70635 10.8348 3.33325 10.4617 3.33325 10.0015C3.33325 9.57414 3.65495 9.22192 4.0694 9.17378L4.16659 9.16817H9.18492L9.19188 4.16708C9.19248 3.70684 9.56607 3.33424 10.0263 3.33484Z'
      fill='currentColor'
    />
  </svg>
);

const ImageIcon = (props: IconProps) => (
  <svg
    width={props.fontSize || 20}
    height={props.fontSize || 20}
    style={props.style}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 21C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3ZM13.9471 12.042C13.5261 11.7213 12.9281 11.7842 12.583 12.1855L10.7002 14.3748C10.3326 14.8019 9.69133 14.8619 9.25032 14.5105L8.06047 13.5625C7.66313 13.2459 7.09157 13.2776 6.73163 13.6361L3.09524 17.2581V18C3.09524 18.4084 3.34007 18.7596 3.69098 18.9149H20.309C20.626 18.7746 20.8565 18.4744 20.898 18.1166L20.9048 18V17.3416L13.9471 12.042ZM19.9048 5H4.09524C3.5824 5 3.15973 5.38604 3.10197 5.88338L3.09524 6L3.095 14.306L6.54494 10.8709C6.89094 10.5262 7.42472 10.4697 7.83235 10.7185L7.94016 10.7939L9.01459 11.6503C9.43496 11.9854 10.045 11.9282 10.3957 11.5208L12.2522 9.36442C12.614 8.94402 13.2424 8.87827 13.684 9.21461L20.904 14.714L20.9048 6C20.9048 5.44772 20.457 5 19.9048 5ZM6 6C7.10455 6 8 6.89545 8 8C8 9.10455 7.10455 10 6 10C4.89545 10 4 9.10455 4 8C4 6.89545 4.89545 6 6 6ZM6 7.71429C5.84219 7.71429 5.71429 7.84219 5.71429 8C5.71429 8.15781 5.84219 8.28571 6 8.28571C6.15781 8.28571 6.28571 8.15781 6.28571 8C6.28571 7.84219 6.15781 7.71429 6 7.71429Z'
      fill='currentColor'
    />
  </svg>
);

export { UploadIcon, AddIcon, ImageIcon };