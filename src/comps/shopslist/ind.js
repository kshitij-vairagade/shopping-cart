import { connect } from 'react-redux';
import AddShop from './AddShop';
import Tile from './Tile';
import Edit from './Edit';
import { show_add,show_edit } from '../../redux/actions/shops';

const List=({shops,showEdit})=>{
    if (!shops.length){
        return null
    }
    return shops.map(shop=>{
        return(<Tile shop ={shop} showEdit={showEdit}/>)
    })
}

const Shops=({shops,show_add,add})=>{
    return(
        <div className={`row ${styles.parent}`}>
            <i onClick={show_add} className={`fas fa-plus-circle ${styles.add_button}`}></i>
            <Edit/>
            <AddShop />
            <div className={styles.list}>
                <List shops={shops} />
            </div>
        </div>)
}
const mapStateToProps = state => ({
    shops:state.shops,
    add:state.add,
    edit:state.edit

 });
 export default connect(mapStateToProps,{show_add})(Shops)