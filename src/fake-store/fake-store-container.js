import { Connect, connect } from "react-redux";
import FakeStoreComponent from "./fake-store-component";

const mapStateToProps = (state) => ({
    store: state.fakeStoreReducer
})



export const FakeStoreContainer = connect(mapStateToProps)(FakeStoreComponent)