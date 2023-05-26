import ListItem from "./ListItem";

const List = ({data}) => {

  return(
    <div>
      {
        data.map( (item) => {
          return(
            <ListItem key={item.id} username={item.username} email={item.email} />
          )
        })
      }
    </div>
  )

}

export default List