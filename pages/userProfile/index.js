const UserProfilePage = (props) => {
const {title} = props

    return <h2>The { title} Profile Page</h2>
}

export const getServerSideProps = async (context) => {
    return {
        props: {
            title:'Vadim',
        }
    }
}

export default UserProfilePage;