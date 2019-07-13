// Libraries
import React from 'react';
import { TITLE_LIST, headers, loanListData } from './data';
import './LoanList.scss';

const renderStatus = status => {
  switch(status) {
    case 1: return <div className="LoanList-status LoanList-status--green">A TIEMPO</div>
    case 2: return <div className="LoanList-status LoanList-status--yellow">RETRASO 1-30</div>
    case 3: return <div className="LoanList-status LoanList-status--orange">RETRASO 31-60</div>
    default: return <div className="LoanList-status LoanList-status--red">DEFAULT</div>
  }
}

const renderHeaders = () => headers.map((name, index) => {
  const classIsRight = index % 2 ? 'align-right' : '';

  return <div className={ `LoanList-header__item ${ classIsRight }` }>{ name }</div>
});

const renderLoanlist = () => loanListData.map(loanData => {
  const { customer, loan, date, status } = loanData;
  const { name, description } = customer;
  const { amount, percentage } = loan;

  return (
    <div className="LoanList__content">
      <div className="LoanList-content-item">
        <div className="LoanList-content-item__name">{ name }</div>
        <div className="LoanList-content-item__description">{ description }</div>
      </div>
      <div className="LoanList-content-item align-right">
        <div className="LoanList-content-item__name">{ amount }</div>
        <div className="LoanList-content-item__description">{ percentage }</div>
      </div>
      <div className="LoanList-content-item">
        <div className="LoanList-content-item__name">{ date }</div>
      </div>
      <div className="LoanList-content-item align-right">{ renderStatus(status) }</div>
    </div>
  )
});

const LoanList = () => (
  <React.Fragment>
    <div className="LoanList">
      <div className="LoanList__title">{ TITLE_LIST }</div>
      <div className="LoanList__header">{ renderHeaders() }</div>
      { renderLoanlist() }
    </div>
  </React.Fragment>
)

export default LoanList
