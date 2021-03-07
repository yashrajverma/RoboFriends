import Card from './card'
const cardList = ({robots}) => {
    const cardcom=robots.map((user,i)=>{
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
  return (
    <div>
      {cardcom}
    </div>
  );
};

export default cardList;
