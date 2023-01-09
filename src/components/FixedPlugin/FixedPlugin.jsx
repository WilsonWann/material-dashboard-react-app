import React, { useState } from "react";
import classnames from "classnames";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_SELECTED_TAG_SUCCESS,
  DELETED_SELECTED_TAG_SUCCESS,
} from "../../actions/GetTagsAction";

import { NavLink } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import GitHubButton from "react-github-button";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

import Button from "components/CustomButtons/Button.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};
export const FixedPlugin = (props) => {
  // const inputLayout = useMemo(() => <></>, [
  //   id,
  //   name,
  //   showOnPage,
  //   taggedNumber,
  // ]);
  const [classes, setClasses] = useState("dropdown show");

  return (
    <div
      className={classnames(
        "fixed-plugin"
        // {
        //   "rtl-fixed-plugin": props.rtlActive,
        // }
      )}
    >
      <div id="fixedPluginClasses" className={props.fixedClasses}>
        <div onClick={props.handleFixedClick}>
          <i className="fa fa-cog fa-2x" />
        </div>

        <ul className="dropdown-menu">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              {/* <form id="tagForm" > */}
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Update Tag</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                  >
                    <label for="id">ID</label>
                    <input
                      type="text"
                      id="id"
                      value={props.id}
                      onChange={props.handleIDChange}
                    />
                    <label for="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={props.name}
                      onChange={props.handleNameChange}
                    />
                    <label for="showOnPage">ShowOnPage</label>
                    <input
                      type="text"
                      id="showOnPage"
                      value={props.showOnPage}
                      onChange={props.handleShowOnPageChange}
                    />
                    <label for="taggedNumber">TaggedNumber</label>
                    <input
                      type="text"
                      id="taggedNumber"
                      value={props.taggedNumber}
                      onChange={props.handleTaggedNumberChange}
                    />
                  </GridContainer>
                </CardBody>
              </Card>
              {/* </form> */}
            </GridItem>
          </GridContainer>
          {props.isCreate ? (
            <button type="button" value="button" onClick={props.createEmptyTag}>
              CREATE
            </button>
          ) : (
            <button type="button" value="button" onClick={props.handleAddRow}>
              ADD
            </button>
          )}

          <button type="button" value="button" onClick={props.handleUpdateRow}>
            UPDATE
          </button>
          <button type="button" value="button" onClick={props.handleDeleteRow}>
            DELETE
          </button>
          <button type="button" value="button" onClick={props.handleCancel}>
            CANCEL
          </button>
        </ul>
      </div>
    </div>
  );
};
