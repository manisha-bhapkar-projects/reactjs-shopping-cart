import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import InfiniteScroll from "react-infinite-scroller";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diaplayitems: 6,
      hasMoreItems: true,
    };
  }

  handleClick = (id) => {
    this.props.addToCart(id);
  };
  showItems() {
    // var items = [];
    let itemList = [];
    if (this.props.value) {
      itemList =
        this.props.searchItems &&
        this.props.searchItems
          .filter((data) => data.id < this.state.diaplayitems)
          .map((item) => {
            return (
              <div className="card mx-auto" key={item.id}>
                <div className="card-image">
                  <img src={item.img} alt={item.title} />
                  <span className="card-title">{item.title}</span>
                  <span
                    to="/"
                    className="btn-floating halfway-fab waves-effect waves-light red"
                    onClick={() => {
                      this.handleClick(item.id);
                    }}
                  >
                    <i className="material-icons">+</i>
                  </span>
                </div>

                <div className="card-content">
                  <p>{item.desc}</p>
                  <p>
                    <b>Price: {item.price}</b>
                  </p>
                </div>
              </div>
            );
          });
    } else {
      itemList =
        this.props.items &&
        this.props.items
          .filter((data) => data.id < this.state.diaplayitems)
          .map((item) => {
            return (
              <div className="card mx-auto" key={item.id}>
                <div className="card-image">
                  <img src={item.img} alt={item.title} />
                  <span className="card-title">{item.title}</span>
                  <span
                    to="/"
                    className="btn-floating halfway-fab waves-effect waves-light red"
                    onClick={() => {
                      this.handleClick(item.id);
                    }}
                  >
                    <i className="material-icons">+</i>
                  </span>
                </div>

                <div className="card-content">
                  <p>{item.desc}</p>
                  <p>
                    <b>Price: {item.price}</b>
                  </p>
                </div>
              </div>
            );
          });
    }
    return itemList;
  }
  loadMore() {
    if (this.props.value) {
      if (this.state.diaplayitems === this.props.searchItems.length) {
        this.setState({ hasMoreItems: false });
      } else {
        setTimeout(() => {
          this.setState({ diaplayitems: this.state.diaplayitems + 6 });
        }, 1000);
      }
    } else {
      if (this.state.diaplayitems === this.props.items.length) {
        this.setState({ hasMoreItems: false });
      } else {
        setTimeout(() => {
          this.setState({ diaplayitems: this.state.diaplayitems + 6 });
        }, 1000);
      }
    }
  }
  render() {
    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">
          <InfiniteScroll
            loadMore={this.loadMore.bind(this)}
            hasMore={this.state.hasMoreItems}
            useWindow={false}
            className="row"
          >
            {this.showItems()}{" "}
          </InfiniteScroll>{" "}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.cartReducer.items,
    searchItems: state.cartReducer.searchItems,
    value: state.cartReducer.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      // console.log("id>>>>>", id);
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
