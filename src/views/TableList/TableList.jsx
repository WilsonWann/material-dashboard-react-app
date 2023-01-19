import React, { useEffect, useRef, useState } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_TAG } from "../../actions/GetTagsAction";
import CustomModal from "../../components/CustomModal/CustomModal";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

function TableList(props) {
  const { classes } = props;

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const tableData = useSelector((state) => state.getTagReducer.tagList);
  const returnMessage = useSelector(
    (state) => state.getTagReducer.errorMessage
  );

  const mounted = useRef();
  const selectedIDRef = useRef(null);

  useEffect(() => {
    console.group("TableList useEffect");
    console.table(tableData);
    console.log(`returnMessage: ${returnMessage}`);
    console.groupEnd("TableList useEffect ");
    if (!mounted.current) {
      //componentDidMount
      selectedIDRef.current = -1;
      mounted.current = true;
      dispatch({ type: REQUEST_TAG });
    } else {
      //componentDidUpdate
      if (returnMessage && returnMessage.indexOf("successfully") !== -1) {
        if (returnMessage.indexOf("update") === -1) {
          selectedIDRef.current = -1;
        }
        closeModal();
      }
    }
    return () => {};
  }, [returnMessage]);

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <GridContainer>
      <CustomModal ariaHideApp={false} isModalOpen={isModalOpen} />
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            {tableData ? (
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "Name", "ShowOnPage", "TaggedNumber"]}
                tableData={tableData}
                openModal={openModal}
                closeModal={closeModal}
                selectedIDRef={selectedIDRef}
              />
            ) : null}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
