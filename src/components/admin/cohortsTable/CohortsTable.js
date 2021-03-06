import React from "react";
import { connect } from "react-redux";
import MaterialDatatable from "material-datatable";
import CohortEditModal from "./CohortEditModal";
import CohortDeleteModal from "./CohortDeleteModal";
import CohortAddModal from "./CohortAddModal";
import { getCohorts, updateCohort, deleteCohort } from "../adminActions.js";

class CohortsTable extends React.Component {
  componentDidMount() {
    this.props.getCohorts();
  }

  render() {
    const column = [
      {
        name: "Cohort",
        field: "cohort_name",
        options: {
          width: 100,
          filter: true,
          sort: true,
          customBodyRender: value => {
            return <p>{value.cohort_name}</p>;
          },
          customSortValue: value => value.cohort_name
        }
      },
      {
        name: "",
        options: {
          width: 200,
          filter: false,
          sort: false,
          customBodyRender: value => {
            return (
              <div className="modals-container">
                <CohortEditModal value={value} />
                <CohortDeleteModal value={value} />
              </div>
            );
          }
        }
      }
    ];

    const options = {
      filterType: "dropdown",
      selectableRows: false,
      showSelectedRowsToolbar: false,
      responsive: "scroll",
      print: false,
      download: false
    };

    return (
      <div className="tableContainer">
        <CohortAddModal />
        <MaterialDatatable
          title={"Cohorts"}
          columns={column}
          data={this.props.cohorts}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cohorts: state.admin.cohorts
  };
};

export default connect(
  mapStateToProps,
  {
    getCohorts,
    updateCohort,
    deleteCohort
  }
)(CohortsTable);
