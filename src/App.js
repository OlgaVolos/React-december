import React, {useState} from "react";
import './App.css';


function App() {

    const [arr, changeArr] = useState([{
        id: 1,
        title: 'title1'
    },
        {
            id: 2,
            title: 'title2'
        },
        {
            id: 3,
            title: 'title3'
        },
        {
            id: 4,
            title: 'title4'
        },
        {
            id: 5,
            title: 'title5'
        },
    ]);
    const [itemsToHide, setItemToHide] = useState([]);

// const removeFirst = () => {
//   const newArr = [...arr]
//   newArr.shift();
//   changeArr(newArr)
//
// }
//   const removeLast = () => {
//     const newArr = [...arr]
//     newArr.pop();
//     changeArr(newArr)
//   }
    // removeFirst  і removeLast  можна зробити однією функцією.
    //тоді в онклік ми функцію викликаємо і передаємо аргументи
    // const handleArrChange = (itemToRemove) => {
    // if(itemToRemove !== 'first' && itemToRemove !== 'last') return;
    //
    // const newArr = [...arr];
    // itemToRemove === 'first' && newArr.shift();
    // itemToRemove === 'last' && newArr.pop();
    // console.log(itemToRemove)
    // // itemToRemove === 'first' ? newArr.shift() : newArr.pop()
    //   changeArr(newArr);
    // }
//Якщо нам треба повернути початковий масив назад, то ми мусимо створити
// UseState з вхідним аргументом [], щоб туди складати вирізані елементи нашими кнопками.
// Для цього ми профільтруємо масив і, якщо він містить елемент з відповідним ід,
// то ці елементи будуть складатися в пустий масив, який ми оголосили в юзстейт

    const filteredArr = arr.filter(value => !itemsToHide.includes(value.id))

    const firstHandleArrChange = () => {
      // const newArr = [...filteredArr]
      // const itemToRemove = newArr[0]; // те ж саме, що й знизу

      const itemToRemove = filteredArr[0];
      if(!itemToRemove) return;
      console.log(itemToRemove);
      setItemToHide([...itemsToHide, itemToRemove.id])
    }

    const lastHandleArrChange = () => {
      // const newArr = [...filteredArr]
      // const itemToRemove = newArr[newArr.length-1]; //// те ж саме, що й знизу
      const itemToRemove = filteredArr[filteredArr.length-1];
      if(!itemToRemove) return;
      console.log(itemToRemove);
      setItemToHide([...itemsToHide, itemToRemove.id])
    }


    const returnHandleArrChange = () => {
        setItemToHide([]);
    }

    const deleteItem = (itemToRemove) => {
        if (!itemToRemove) return;

        const clone = [...itemsToHide];
        clone.push(itemToRemove.id);
        setItemToHide(clone);
    }

    return (
        <div>
            <ul>
                {filteredArr.map(value => (
                    <li id={value.id}
                        onClick={({target}) => target.classList.toggle('black')}
                        className={'App'} key={value.id}>{value.title} -
                        <button onClick={(e) => {
                            e.stopPropagation();
                            deleteItem(value)
                        }}>Remove</button>
                    </li>))}
            </ul>
            <button onClick={firstHandleArrChange}>Delete first</button>
            <button onClick={lastHandleArrChange}>Delete last</button>
            <button onClick={returnHandleArrChange}>Return</button>
        </div>
    );
}

export default App;
