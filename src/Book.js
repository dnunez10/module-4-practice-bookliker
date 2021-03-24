import React from 'react'
import {Menu} from 'semantic-ui-react'

const Book = ({book, onClick}) => {
    return (    
        <Menu.Item as={"a"} onClick={(e) => onClick(book)}>
            <div>{book.title}</div>  
        </Menu.Item>  
              
    )
}

export default Book