import React, { useContext} from 'react';
import {
  AppstoreOutlined,
  TableOutlined,
  CreditCardOutlined,
  MailOutlined,
  FileOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";

import { Button, Menu,Row,Col, Form ,Input,Radio,InputNumber,Select,Checkbox,Card,Table,Space,Popover} from 'antd';

import { TemplateData } from "../index"

const Footer = ()=>{
    const [form] = Form.useForm()
    //const {setFooterData} = useContext(TemplateData)


    const onChangeData=()=>{
        let formData = form.getFieldsValue(true)
        console.log(formData)
        form.setFieldsValue(formData)
        setFooterData(formData)
      }


    return(
        <>
        <Form form={form}  layout="vertical" name="form"  onValuesChange={onChangeData}>
        <div style={{marginLeft:"8px",borderRight:"9px solid gray"}}>
            <h1>Footer</h1>
            <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
            Notes
            </div>
            <Row style={{marginLeft:"12px"}}>
            <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Label</p>
                </Col>
                <Col span={14}>
                <Form.Item name="footerNotesLabel" initialValue="">
              <Input style={{width:"210px"}} placeHolder="Notes"></Input>
              </Form.Item>
                </Col>
                <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Size</p>
                </Col>
                <Col span={14} >
                <Form.Item  name="footerFontSize"  initialValue="">
              <Input style={{width:"210px"}}></Input>
              </Form.Item>
                </Col>
            </Row>
            <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
            Payment Options
            </div>
            <Row style={{marginLeft:"12px"}}>
            <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Online Payment Link</p>
                </Col>
                <Col span={1} style={{height:"56px"}}>
            <Form.Item name="footerOnlinePaymentLinkCheck" initialValue={false} valuePropName="checked" style={{marginRight:"20px",display:"flex"}} >
              <Checkbox/>
              </Form.Item>
            </Col>
                <Col span={13}  style={{display:"flex"}}>
                <Form.Item  name="footerOnlinePaymentLink" initialValue="">
              <Input style={{width:"178px",marginLeft:"13px"}} ></Input>
              </Form.Item>
                </Col>
                <Col span={10} style={{height:"40px"}}>
                  <Form.Item  name="footerTerms&Conditions" initialValue={false} valuePropName="checked">
                <Checkbox>Terms & Conditions</Checkbox>
                  </Form.Item>
                </Col>
                <Col span={14} >
                </Col>
                <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Label</p>
                </Col>
                <Col span={14}>
                <Form.Item  name="footerPaymentOptionLabel" initialValue="">
              <Input style={{width:"210px"}} ></Input>
              </Form.Item>
                </Col>
                <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Size</p>
                </Col>
                <Col span={14}>
                <Form.Item  name="footerPaymentOptionFontSize" initialValue="">
              <Input style={{width:"210px"}} ></Input>
              </Form.Item>
                </Col>
                <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Color</p>
                </Col>
                <Col span={14}>
                <Form.Item  name="footerPaymentOptionFontColor" initialValue="">
              <Input style={{width:"210px"}} ></Input>
              </Form.Item>
                </Col>
                <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Background Color</p>
                </Col>
                <Col span={1} style={{height:"56px"}}>
            <Form.Item  name="footerPaymentOptionBackgroundColorCheck" initialValue={false} valuePropName="checked" style={{marginRight:"20px",display:"flex"}} >
              <Checkbox/>
              </Form.Item>
            </Col>
                <Col span={13} style={{display:"flex"}}>
                <Form.Item name="footerPaymentOptionBackgroundColor" initialValue="">
              <Input style={{width:"178px",marginLeft:"13px"}} ></Input>
              </Form.Item>
                </Col>
                <Col span={24}>
              <Form.Item name="footerPaymentOptionImagePosition" label="Image Position" >
            <Select style={{width:"365px"}}></Select>
            </Form.Item>
              </Col>
            </Row>
            <Row>
            <Col span={10} style={{marginBottom:"25px",display:"flex",alignItems:"center"}}>
                  <Form.Item name="footerShowPageNumberCheck" initialValue={false} valuePropName="checked"></Form.Item>
                <Checkbox>Show Page Number</Checkbox>
                </Col>
            </Row>
            <div >
            </div>
          </div>
        </Form>
        </>
        
    )
}

export default Footer