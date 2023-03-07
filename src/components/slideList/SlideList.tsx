import { useState } from 'react';
import { List, arrayMove } from 'react-movable';
import { VscListSelection } from 'react-icons/vsc';

const SlideList: React.FC = () => {
    const [items, setItems] = useState([{
        color: 'bg-green-500',
        title: 'GREEN',
        pos: 1
    }, {
            color: 'bg-red-300',
            title: 'RED',
        pos: 2
        }, {
            color: 'bg-yellow-500',
            title: 'YELLOW',
        pos: 3
        }]);
    return (
        <List
            values={items}
            onChange={({ oldIndex, newIndex }) =>{
                const data = arrayMove(items, oldIndex, newIndex);
                for(let i = 0; i< data.length ; i++){
                    data[i].pos = i + 1
                }
                setItems(data)
            }}
            renderList={({ children, props }) => <div {...props}>{children}</div>}
            renderItem={({ value, props }) => <div {...props}>
                <SlideSmallScreen {...value} />
            </div>}
        />
    );
};

const SlideSmallScreen = ({ color, title, pos }: { color: string, title: string, pos : number})=>{
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <div className={`${color} w-full h-32 flex items-center py-4 px-1 cursor-grab hover:opacity-75`} 
            id="sliceScreen"
            onMouseOver={()=>{
                setIsOpenMenu(true)
            }}

            onMouseLeave={()=>{
                setIsOpenMenu(false)
            }}
        >
            <div className='border-2 border-black h-[80%] rounded'></div>
            <div className='flex justify-center items-start h-full w-full'>
                <div className='flex-col px-2'>
                    <div className='h-20 -mt-1'>{pos}</div>
                    <div className='cursor-pointer'>
                        {isOpenMenu  && <VscListSelection /> }
                    </div>
                </div>
                <div className='w-full border-2 border-black h-full cursor-pointer'>
                </div>
            </div>
        </div>
    )
}

export default SlideList