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
        },
        {
            color: 'bg-blue-600',
            title: 'BLUE',
            pos: 4
        },
        {
            color: 'bg-gray-600',
            title: 'GRAY',
            pos: 5
        },
         {
            color: 'bg-black',
            title: 'BLACK',
            pos: 6
        },
        {
            color: 'bg-orange-500',
            title: 'ORANGE',
            pos: 7
        },
        {
            color: 'bg-green-700',
            title: 'GREEN',
            pos: 8
        },
        {
            color: 'bg-red-600',
            title: 'WHITE',
            pos: 9
        },
        {
            color: 'bg-blue-600',
            title: 'WHITE',
            pos: 10
        }
    ]);


    return (
        <div id="slideList">
            <List
                values={items}
                onChange={({ oldIndex, newIndex }) => {
                    const data = arrayMove(items, oldIndex, newIndex);
                    for (let i = 0; i < data.length; i++) {
                        data[i].pos = i + 1
                    }
                    setItems(data)
                }}
                renderList={({ children, props }) => <div {...props}>{children}</div>}
                renderItem={({ value, props }) => <div {...props}>
                    <SlideSmallScreen {...value} />
                </div>}
            />
        </div>
    );
};

const SlideSmallScreen = ({ color, title, pos }: { color: string, title: string, pos : number})=>{
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <div className="w-full h-32 flex items-center py-4 px-1 cursor-grab hover:opacity-75" 
            id="sliceScreen"
            onMouseOver={()=>{
                setIsOpenMenu(true)
            }}

            onMouseLeave={()=>{
                setIsOpenMenu(false)
            }}
        >
            <div className='border-2 border-black h-[82%] rounded'></div>
            <div className='flex justify-center items-start h-full w-full'>
                <div className='flex-col'>
                    <div className='h-20 -mt-1 px-2'>{pos}</div>
                    <div className='cursor-pointer ml-2 rounded'>
                        {isOpenMenu  && <VscListSelection /> }
                    </div>
                </div>
                <div className='w-full rounded border-2 border-black h-full cursor-pointer'>
                </div>
            </div>
        </div>
    )
}

export default SlideList