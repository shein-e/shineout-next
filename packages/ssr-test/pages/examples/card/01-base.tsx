/**
 * cn - 基本用法
 *    -- Card 内部由 Header, Body, Footer 三个自组件组成，可以组合或单独使用
 * en - Base
 *    -- The card is composed of three components: Header, Body, and Footer. It can be combined or used separately
 */
import React from 'react';
import { Card, TYPE, Button } from 'shineout';

type CardProps = TYPE.Card.Props;

type CardStyle = CardProps['style'];

const cardStyle: CardStyle = {
  width: 360,
};

const iconStyle = {
  width: 32,
  height: 32,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};

const App: React.FC = () => (
  <div>
    <Card style={cardStyle} split>
      <Card.Header
        extra={
          <Button mode='text' type='primary'>
            Text Button
          </Button>
        }
      >
        Card title
      </Card.Header>
      <Card.Body>
        Joy in living comes from having fine emotions, trusting them, giving them the freedom of a
        bird in the open.
      </Card.Body>
      <Card.Footer>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              marginRight: 8,
              ...iconStyle,
            }}
          >
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.6084 4.76308C11.5697 4.75817 11.5308 4.75559 11.4917 4.75534L9.33165 4.74819C9.42966 4.30236 9.48157 3.85177 9.48157 3.43331C9.48157 3.00474 9.43549 2.57319 9.34507 2.14938C9.33827 2.11717 9.3285 2.08568 9.31591 2.05534C9.0814 1.1845 8.32423 0.583313 7.4434 0.583313C6.40039 0.583313 5.61348 1.45653 5.61348 2.61427L5.61289 2.64403C5.61127 2.6823 5.61127 2.72063 5.61289 2.75891C5.56739 3.96546 4.59497 5.01843 3.38338 5.1732L1.67654 5.20117C1.39501 5.17907 1.11723 5.27806 0.910387 5.4742C0.703543 5.67034 0.586463 5.94578 0.587457 6.23391L0.583374 12.3869C0.583374 12.9541 1.03429 13.4166 1.58904 13.4166H3.46213L10.5794 13.4041C10.9737 13.4041 11.2211 13.2911 11.5145 13.097C11.805 12.9041 12.0409 12.6369 12.1987 12.322C12.253 12.2327 12.2932 12.1375 12.3189 12.0381L12.3236 12.0184L13.3841 7.13748C13.4074 7.04224 13.4173 6.94462 13.4133 6.847C13.4372 6.4303 13.3361 6.01604 13.1233 5.6595C12.7891 5.09879 12.2792 4.7976 11.6084 4.76308ZM2.18914 6.2391L2.30975 6.23731C2.63189 6.23254 2.89681 6.49515 2.90149 6.82385C2.90153 6.82673 2.90155 6.82961 2.90155 6.83249V11.7738C2.90155 12.1025 2.64038 12.369 2.31821 12.369H2.19338C1.87121 12.3695 1.61004 12.103 1.61004 11.7743L1.6105 11.7738L1.61426 6.83381C1.61451 6.50862 1.87048 6.24381 2.18914 6.2391ZM12.3831 6.90296L11.3255 11.7714C11.3129 11.7904 11.3016 11.8103 11.2917 11.8309C11.2162 11.989 11.0998 12.123 10.9551 12.2184C10.7672 12.3428 10.713 12.3565 10.5742 12.3565L4.51258 12.3674C4.19041 12.368 3.92879 12.1019 3.92822 11.7732L3.92822 11.7722V6.13272C5.46006 5.7476 6.59581 4.37141 6.63898 2.76367C6.63993 2.74442 6.63954 2.72513 6.63781 2.70593V2.67617L6.63956 2.61367C6.63956 2.12558 6.91548 1.63034 7.4434 1.63034C7.87098 1.63034 8.2379 1.93748 8.3359 2.37736C8.34123 2.40165 8.34825 2.42552 8.3569 2.44879C8.42131 2.77265 8.45394 3.10226 8.45432 3.43272C8.45432 3.95058 8.3499 4.55772 8.16848 5.09939C8.11461 5.25914 8.13966 5.43562 8.23573 5.57322C8.3318 5.71082 8.48708 5.79261 8.65265 5.79284L11.4912 5.80296C11.5087 5.80534 11.5256 5.80712 11.5425 5.80772C11.8791 5.822 12.0891 5.93986 12.2466 6.20355C12.354 6.38442 12.4031 6.59508 12.3872 6.80593C12.3854 6.8321 12.3856 6.85837 12.3877 6.8845L12.3837 6.90236L12.3831 6.90296Z'
                fill='#666C7C'
              />
            </svg>
          </div>
          <div
            style={{
              marginRight: 8,
              ...iconStyle,
            }}
          >
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.6666 1.75C12.311 1.75 12.8333 2.26557 12.8333 2.90155V11.5382C12.8333 11.9313 12.5104 12.25 12.1121 12.25C12.0002 12.25 11.8898 12.2243 11.7897 12.1749L8.41102 11.0839C8.24907 11.004 8.0705 10.9624 7.88944 10.9624H2.33329C1.68896 10.9624 1.16663 10.4468 1.16663 9.81085V2.90155C1.16663 2.26557 1.68896 1.75 2.33329 1.75H11.6666ZM11.0833 2.90155H2.91663C2.59446 2.90155 2.33329 3.15933 2.33329 3.47733V9.23508C2.33329 9.55307 2.59446 9.81085 2.91663 9.81085H7.88944C8.19982 9.81085 8.50655 9.87197 8.79183 9.99006L8.9326 10.0538L11.2947 10.7214C11.4495 10.7652 11.611 10.6767 11.6554 10.5239C11.6628 10.4981 11.6666 10.4714 11.6666 10.4446V3.47733C11.6666 3.15933 11.4055 2.90155 11.0833 2.90155ZM7.5832 6.93198C7.90533 6.93202 8.16645 7.18979 8.16645 7.50775C8.16645 7.82571 7.90533 8.08348 7.5832 8.08353H4.0832C3.76107 8.08348 3.49996 7.82571 3.49996 7.50775C3.49996 7.18979 3.76107 6.93202 4.0832 6.93198H7.5832ZM9.91654 4.62888C10.125 4.62884 10.3176 4.73858 10.4218 4.91674C10.526 5.0949 10.526 5.3144 10.4218 5.49256C10.3176 5.67072 10.125 5.78046 9.91654 5.78043H4.0832C3.76107 5.78038 3.49996 5.52261 3.49996 5.20465C3.49996 4.88669 3.76107 4.62892 4.0832 4.62888H9.91654Z'
                fill='#666C7C'
              />
            </svg>
          </div>
          <div style={iconStyle}>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.1513 0.592407C12.2679 0.571526 12.3807 0.587559 12.48 0.6307C12.4836 0.633009 12.4876 0.634808 12.4917 0.636657C12.5519 0.663785 12.6065 0.701338 12.6537 0.746589C12.6566 0.749428 12.6596 0.752341 12.6626 0.755292L12.6712 0.764178C12.7165 0.811346 12.754 0.865931 12.7817 0.925713C12.7831 0.930218 12.7849 0.9343 12.7866 0.938397C12.8418 1.06357 12.8529 1.21109 12.8006 1.36048L12.8119 1.32526C12.8096 1.3333 12.8072 1.34131 12.8046 1.34926L12.8006 1.36048L8.92148 12.4438C8.74695 12.9425 8.05241 12.9708 7.83784 12.488L5.71206 7.70519L0.929811 5.58C0.470019 5.37564 0.473825 4.73594 0.905988 4.52472L0.974021 4.49635L12.0574 0.617187C12.0613 0.615824 12.0651 0.614504 12.069 0.613227C12.0766 0.610661 12.0846 0.608239 12.0926 0.605992C12.1093 0.601251 12.1257 0.597343 12.142 0.594157C12.1436 0.594178 12.1454 0.593853 12.1472 0.593537L12.1513 0.592407ZM10.8547 3.38798L6.84954 7.39315L8.30614 10.6697L10.8547 3.38798ZM10.0305 2.5614L2.74756 5.1111L6.02412 6.56773L10.0305 2.5614Z'
                fill='#666C7C'
              />
            </svg>
          </div>
          <div style={{ ...iconStyle, marginInlineStart: 'auto' }}>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.91667 5.83331C3.561 5.83331 4.08333 6.35565 4.08333 6.99998C4.08333 7.64431 3.561 8.16665 2.91667 8.16665C2.27233 8.16665 1.75 7.64431 1.75 6.99998C1.75 6.35565 2.27233 5.83331 2.91667 5.83331ZM7 5.83331C7.64433 5.83331 8.16667 6.35565 8.16667 6.99998C8.16667 7.64431 7.64433 8.16665 7 8.16665C6.35567 8.16665 5.83333 7.64431 5.83333 6.99998C5.83333 6.35565 6.35567 5.83331 7 5.83331ZM11.0833 5.83331C11.7277 5.83331 12.25 6.35565 12.25 6.99998C12.25 7.64431 11.7277 8.16665 11.0833 8.16665C10.439 8.16665 9.91667 7.64431 9.91667 6.99998C9.91667 6.35565 10.439 5.83331 11.0833 5.83331Z'
                fill='#666C7C'
              />
            </svg>
          </div>
        </div>
      </Card.Footer>
    </Card>
  </div>
);

export default App;
