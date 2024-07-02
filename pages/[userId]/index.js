const UserDetailPage = (props) => {
  return <h2>{props.id}</h2>;
};

export const getServerSideProps = async (context) => {
    const { params } = context
    
    const userId = params.userId;
    return {
        props: {
            id:'userId-' + userId,
        }
    }
}

export default UserDetailPage;
