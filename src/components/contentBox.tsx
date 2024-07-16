import { ReactNode } from 'react';
import { Black_Han_Sans } from 'next/font/google';


const black_hans = Black_Han_Sans({
    subsets : ['latin'],
    style : "normal",
    weight: '400'
})

interface ContentBoxProps {
  children: ReactNode;
}

const ContentBox = ({ children }: ContentBoxProps) => {
  return (
    <div className={black_hans.className}>
        <div className="border border-gray-300  items-center rounded mb-3 p-2">
          <div className="flex items-center justify-center py-8">
                  {children}
          </div>
        </div>
            
    </div>
    
  );
};

export default ContentBox;
