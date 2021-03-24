import React from 'react'
import {
    Container,
    Header,
    Button,
    List,
    Image
  } from "semantic-ui-react";

const BookInfo = ({bookInfo, likeBook}) => {
    return(
        <Container text>
            <Header>{bookInfo.title}</Header>
            <Image
            src={bookInfo.img_url}
            size="small"
            />
            <p>{bookInfo.description}</p>
            <Button
            onClick={ e => likeBook(bookInfo.id)}
            color="red"
            content="Like"
            icon="heart"
            label={{
                basic: true,
                color: "red",
                pointing: "left",
                content: "2,048"
            }}
            />
            <Header>Liked by</Header>
            <List>
                {bookInfo.users.map(user => <List.Item icon="user" content={user.username} />)}
            </List>
        </Container>
    )
}


export default BookInfo