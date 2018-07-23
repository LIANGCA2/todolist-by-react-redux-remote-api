import React, {Component} from "react"
import {BrowserRouter, Link} from "react-router-dom";
import {Button, ButtonGroup, Card, Col, Row} from "antd";


class FilterList extends Component {
    constructor(props) {
        super(props);

    }

    changeTab = (event, status) => {
        this.props.changeTab(status)
    }

    render() {
        const tabList = [{
            key: 'all',
            tab: 'all',
        }, {
            key: 'active',
            tab: 'active',
        },
            {
                key: 'complete',
                tab: 'complete',
            }];
        console.log(this.props.status)
        return (<div className="filters">

            <Col offset={9} span={3} >
            <Button size="large" type={this.props.status == "all" ? "primary" : ""}>
                <Link to="/all" data-filter="all" className={this.props.status == "all" ? "selected" : ""}
                      onClick={(event, status) => this.changeTab(event, "all")}>ALL</Link></Button>

            <Button size="large" type={this.props.status === "active" ? "primary" : ""}>
                <Link to="/active" data-filter="active" className={this.props.status == "active" ? "selected" : ""}
                      onClick={(event, status) => this.changeTab(event, "active")}>Active</Link></Button>

            <Button size="large" type={this.props.status === "completed" ? "primary" : ""}>
                <Link to="/completed" data-filter="complete"
                      className={this.props.status == "completed" ? "selected" : ""}
                      onClick={(event, status) => this.changeTab(event, "completed")}>Complete</Link></Button>
            </Col>

        </div>)
    }
}

export default FilterList