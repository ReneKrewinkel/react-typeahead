import TextItem from './TextItem'

const ListItem = ({ username, email }) => {

  return(
    <div style={{ padding: 5 }}>
      <TextItem text={username} /> -
      <TextItem text={email} />
    </div>
  )

}

export default ListItem