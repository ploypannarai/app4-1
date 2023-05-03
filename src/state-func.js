import React, {useState} from 'react'

export default function Crat(){
    let [numItem, setNumItem] = useState(0)
    let stock = 10

    const onClickAddCrat = () => {
        if (numItem < stock){
        let newItem = numItem + 1
        setNumItem(newItem)
        }
    }
    const onClickDeleteCrat = () => {
        if (numItem > 0){
            setNumItem(numItem - 1)
        }
    }

    return(
    <div>
        <div>จำนวนสินค้าในตะกร้า : {numItem}</div>
        <button onClick={onClickAddCrat}>เพิ่มสินค้าลงในตะกร้า</button>
        <button onClick={onClickDeleteCrat}>ลบสินค้าในตะกร้า</button>
    </div>
    )
}