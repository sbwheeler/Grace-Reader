// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';


// class GenreList extends Component {
//   constructor(props){
//     super(props)
//   }

//   render() {
//     const books = this.props.allBooks;
//     const genre = this.props.allBooks.genre
//     return (
//       <div className="row">
//         <h1>Genre List</h1>
//           <ul>
//           {
//             genre && genre.map(genre => (
//               <div className="col-xs-4" key={ book.id }>
//                 <Link className="thumbnail" to={`/books/book/${book.id}`}>
//                   <div className="caption">
//                     <h5>
//                       <span>{ genre.title }</span>
//                     </h5>
//                   </div>
//                 </Link>
//               </div>
//             ))
//           }
//         </ul>
//     </div>
//   )
//   }
// }
// export default GenreList;

// const genre = this.props.allBooks.genre
