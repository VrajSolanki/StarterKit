import React, { PropTypes } from 'react'
import PDF from 'react-pdf-js';
import classes from './PdfViewer.scss'

class PdfViewer extends React.Component {

  constructor(props) {
   super(props);
   this.state = {};
   this.onDocumentComplete = this.onDocumentComplete.bind(this);
   this.onPageComplete = this.onPageComplete.bind(this);
   this.handlePrevious = this.handlePrevious.bind(this);
   this.handleNext = this.handleNext.bind(this);
 }

 componentWillReceiveProps(nextProps) {
   if(nextProps.next){
     this.handleNext();
     this.props.resetNext();
   }
   else if (nextProps.previous) {
     this.handlePrevious();
     this.props.resetPrevious();
   }
 }

 onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  onPageComplete = (page) => {
    this.setState({ page });
  }

  handlePrevious = () => {
    if(this.state.page > 1){
      this.setState({ page: this.state.page - 1 });
    }
  }

  handleNext = () => {
    if(this.state.page< this.state.pages ){
      this.setState({ page: this.state.page + 1 });
    }
  }

  renderPagination(page, pages) {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> </a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> </a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#"> <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#"> <i className="fa fa-arrow-right"></i></a></li>;
    }

    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }

  render () {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    const pdfUrl = this.props.attachmentUrl
    return(
      <div className={classes.container}>
        <PDF file={pdfUrl} scale={this.props.zoomLevel} className={classes.pdfViewerClass} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} />
        {/* {pagination} */}
      </div>
    )
  }
}

export default PdfViewer;
