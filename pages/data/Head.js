import React, { useEffect, useState,useContext } from 'react';
import {
  AppstoreOutlined,
  TableOutlined,
  CreditCardOutlined,
  MailOutlined,
  FileOutlined,
  UploadOutlined,

} from '@ant-design/icons';

import { Button,Upload, Menu,Row,Col, Form ,Input,Radio,InputNumber,Select,Checkbox,Card,Table,Space,Popover,Slider} from 'antd';
import { HexColorPicker } from "react-colorful";

import { TemplateData } from "../index";
import "antd/dist/antd.css";
const Header = ()=>{

  const [form] = Form.useForm()

  const [headerBackgroundColor,setHeaderBackgroundColor] = useState("#ffffff");
  const [headerNameColor,setHeaderNameColor] = useState("#ffffff");
  const [logoChecked,setLogoChecked] = useState(true)
  const [imageSize,setImageSize] = useState(false)

  const {headerData,setHeaderData} = useContext(TemplateData);

  const imageUploadStatusChange = (uploadStatus) => {
    // const fieldsToUpdate = {};
    // fieldsToUpdate["item"] = uploadStatus.file.response;
    // form.setFieldsValue({
    //   designImage: uploadStatus.file.response,
    // });
    // setHeaderData({...headerData,imageVisible:true})
    form.setFieldsValue({
      headerImageVisible:true
    })
    setImageSize(true)
  };



  const onChangeData =(data)=>{
    let formData = form.getFieldsValue(true)
  form.setFieldsValue(formData)
  if(Object.keys(data)[0] === "headerBackgroundColorPicker"){
    form.setFieldsValue({
      headerBackgroundColor:data.headerBackgroundColorPicker
    })
  setHeaderBackgroundColor(data.headerBackgroundColorPicker) 
  }else if(Object.keys(data)[0] === "headerNameColorPicker"){
    form.setFieldsValue({
      headerNameColor:data.headerNameColorPicker
    })
  setHeaderNameColor(formData.headerNameColorPicker) 
  }
  setHeaderData(formData)
  }

  const getOrgLogo =(e)=>{
    setLogoChecked(e.target.checked)
  }


  return(
      <>
      <Form form={form}  layout="vertical" name="form" onValuesChange={onChangeData}>
      <div style={{marginLeft:"8px",borderRight:"9px solid #E4E4E4"}}>
          <div >
              <h1 >Header</h1>
          </div>
          <div >
          <Form.Item name="orgLogo" style={{marginTop:"5px",width:"365px"}} initialValue={true} valuePropName="checked">
          <Checkbox onChange={getOrgLogo}>Show Organization Logo</Checkbox>
          </Form.Item>
          {logoChecked ? <Form.Item name="orgLogoImage" style={{ color: "#8E8E8E", fontSize: "13px", marginTop: "-17px",marginLeft:"20px",marginBottom:"30px" }}>
                    <Upload
                      action="https://sapp.mycw.in/image-manager/uploadImage"
                      listType="picture"
                      headers={{ APIKey: "AUa4koVlpsgR7PZwPVhRdTfUvYsWcjkg" }}
                      name="image"
                      onChange={imageUploadStatusChange}
                      maxCount={1}
                    >
                      <Button icon={<UploadOutlined />}>Upload data</Button>
                    </Upload>
          </Form.Item>: null}
          {imageSize ? 
          <Form.Item name="slider" style={{paddingRight:"20px"}}>
            <Slider defaultValue={40} />
          </Form.Item>: null}
      
          <Form.Item name="orgName" style={{marginTop:"-23px",width:"365px"}} initialValue={true} valuePropName="checked">
          <Checkbox >Show Organization Name</Checkbox>
          </Form.Item>
          <Form.Item name="orgAddress" style={{marginTop:"-23px",width:"365px"}} initialValue={true} valuePropName="checked">
          <Checkbox >Show Organization Address</Checkbox>
          </Form.Item>
          <Form.Item name="orgTitle" style={{marginTop:"-23px",width:"365px"}} initialValue={true} valuePropName="checked">
          <Checkbox  > Show Document Title</Checkbox>
          </Form.Item>
          <Form.Item name="orgTitleString" style={{marginTop:"-23px",width:"365px"}}>
          <Input/>
          </Form.Item>
          <div style={{marginBottom:"25px"}}>
            Background Image
            <div style={{marginTop:"25px"}}>
            <span style={{width:"156px",height:"31px",backgroundColor:"#F5F5F5",border:"1px solid #DDDDDD",padding:"5px 10px",height:"31px",borderRadius:"2px",marginRight:"5px",fontSize:"13px"}}> Choose From Desktop</span>
            <span style={{width:"156px",height:"31px",backgroundColor:"#F5F5F5",border:"1px solid #DDDDDD",padding:"5px 10px",height:"31px",borderRadius:"2px",fontSize:"13px"}}> Choose From Gallery</span>
            </div>
          </div>
          <Form.Item name="imagePosition" label="Image Position" >
          <Select style={{width:"365px"}} ></Select>
          </Form.Item>
          </div>
          <Row style={{marginLeft:"12px"}}>
          <Col span={1} style={{marginTop:"28px"}}>
          <Form.Item name="headerBackgroundColorCheck" style={{marginRight:"20px",display:"flex"}}  initialValue={false} valuePropName="checked">
            <Checkbox />
            </Form.Item>
          </Col>
           <Col span={10}>
           <Form.Item name="headerBackgroundColor" label="Background Color" initialValue={headerBackgroundColor} style={{display:"flex",marginLeft:"10px"}}>
            <Input style={{width:"124px"}} />
            </Form.Item> 
           </Col>
           <Col span={1} style={{marginTop:"25px"}}>
            <div style={{marginLeft:'-35px',paddingTop:"5px"}}> 
            <Popover 
            content={
              <div >
           <Form.Item name="headerBackgroundColorPicker">
           <HexColorPicker  />
           </Form.Item>
              </div>
            }
             trigger="click" placement="topRight">
            <p style={{height:"30px",width:"32px",backgroundColor:headerBackgroundColor,border:"1px solid #9E9E9E"}} ></p>
            </Popover>
            </div>
           </Col>
          </Row>
          <div style={{marginLeft:"12px"}}>
          <Form.Item name="orgLogo" style={{marginTop:"-15px",width:"365px"}} initialValue={false} valuePropName="checked">
          <Checkbox >Apply to first page only</Checkbox>
          </Form.Item>
          </div>
          <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
            Document Title
          </div>
            <Row style={{marginLeft:"12px"}}>
              <Col span={12} >
              <p style={{textAlign:"start",margin:"auto 0"}}>Font Size</p>
              </Col>
              <Col span={12}>
            <Form.Item name="headerFontSize" initialValue={30}>
            <InputNumber defaultValue={30} style={{width:"190px"}}></InputNumber>
            </Form.Item>
              </Col>
              <Col span={12} >
              <p style={{textAlign:"start",margin:"auto 0"}}>Font Color</p>
              </Col>
              <Col span={12}>
            <Form.Item  name="headerFontColor">
            <Input style={{width:"190px"}} ></Input>
            </Form.Item>
              </Col>
            </Row>
          <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
          Organization
          </div>
            <Row >
           <Col span={11}>
           <Form.Item name="headerNameColor" label="Name Color" initialValue={headerNameColor} style={{marginRight:"20px",display:"flex",marginLeft:"10px"}}>
            <Input style={{width:"145px"}} />
            </Form.Item> 
           </Col>
           <Col span={1} style={{marginTop:"11px"}}>
            <div style={{marginLeft:'-40px',paddingTop:"5px"}}> 
            <Popover 
            content={
              <div >
           <Form.Item name="headerNameColorPicker">
           <HexColorPicker  />
           </Form.Item>
              </div>
            }
             trigger="click" placement="topRight">
            <p style={{height:"30px",width:"32px",backgroundColor:headerNameColor,border:"1px solid #9E9E9E"}}></p>
            </Popover>
            </div>
           </Col>
            <Col span={12}>
              <Form.Item name="headerNameFontSize" label="Name Font Size" initialValue={16}>
            <InputNumber defaultValue={16} style={{width:"170px"}} ></InputNumber>
            </Form.Item>
              </Col>
              <Col span={12} style={{marginLeft:"12px"}}>
              <Form.Item name="headerPhone" label="Phone" style={{marginRight:"20px"}} >
            <Input style={{width:"170px"}}></Input>
            </Form.Item>
              </Col>
              <Col span={12} style={{marginLeft:"-12px"}}>
              <Form.Item name="headerFax" label="Fax" >
            <Input style={{width:"170px"}} ></Input>
            </Form.Item>
              </Col>
            </Row>
            <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
            Customer Name
          </div>
          <Row style={{marginLeft:"12px"}}>
              <Col span={12}>
              <Form.Item name="headerFontColor" label="Font Color" style={{marginRight:"20px"}} >
            <Input style={{width:"170px"}} ></Input>
            </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="headerCustomerFontSize" label="Font Size" initialValue={12}>
            <InputNumber defaultValue={12} style={{width:"170px"}} ></InputNumber>
            </Form.Item>
              </Col>
            </Row>
            <div style={{marginLeft:"12px"}}>
              <Form.Item style={{marginBottom:"10px"}} name="headerBillToCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Bill to</Checkbox>
              </Form.Item>
              <Form.Item style={{marginBottom:"15px"}} name="headerBillTo" initialValue="Bill To">
                <Input defaultValue="Bill To" style={{width:"320px"}} ></Input>
              </Form.Item>
            </div>
            <div style={{marginLeft:"12px"}}>
              <Form.Item style={{marginBottom:"10px"}} name="headerShipToCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Ship to</Checkbox>
              </Form.Item>
              <Form.Item style={{marginBottom:"15px"}} name="headerShipTo">
                <Input defaultValue="Ship To" style={{width:"320px"}} ></Input>
              </Form.Item>
            </div>
            <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
            Document Information
          </div>
          <Row style={{marginLeft:"12px"}}>
              <Col span={12} >
              <Form.Item style={{marginBottom:"10px"}} name="headerNumberFieldCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Number Field</Checkbox>
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="headerNumberField" >
            <Input defaultValue="#" style={{width:"190px"}} ></Input>
            </Form.Item >
              </Col>
              <Col span={12} >
              <Form.Item style={{marginBottom:"10px"}} name="headerDateFieldCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Date Field</Checkbox>
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="headerDateField" initialValue="Date Field">
            <Input defaultValue="Date Field" style={{width:"190px"}} ></Input>
            </Form.Item >
              </Col>
              <Col span={12} >
              <Form.Item style={{marginBottom:"10px"}} name="headerTermsCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Terms</Checkbox>
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="headerTerms" initialValue="Terms">
            <Input defaultValue="Terms" style={{width:"190px"}} ></Input>
            </Form.Item >
              </Col>
              <Col span={12} >
              <Form.Item style={{marginBottom:"10px"}} name="headerDueDateCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Due Date</Checkbox>
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="headerDueDate" initialValue={"Due Date"}>
            <Input defaultValue="Due Date" style={{width:"190px"}} ></Input>
            </Form.Item >
              </Col>
              <Col span={12} >
              <Form.Item style={{marginBottom:"10px"}} name="headerReferenceFieldCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Reference Field</Checkbox>
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="headerReferenceField" initialValue="Reference Field">
            <Input style={{width:"190px"}} ></Input>
            </Form.Item >
              </Col>
              <Col span={12} >
              <Form.Item style={{marginBottom:"10px"}} name="headerSalespersonCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Salesperson</Checkbox>
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="headerSalesperson" initialValue="Salesperson">
            <Input style={{width:"190px"}} ></Input>
            </Form.Item >
              </Col>
              <Col span={12} >
              <Form.Item style={{marginBottom:"10px"}} name="headerProjectCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Project</Checkbox>
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="headerProject" initialValue="Project">
            <Input style={{width:"190px"}} ></Input>
            </Form.Item >
              </Col>
              <Col span={12} >
              <Form.Item style={{marginBottom:"10px"}} name="headerSubjectCheck" initialValue={true} valuePropName="checked">
                <Checkbox >Subject</Checkbox>
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="headerSubject" initialValue="Subject">
            <Input style={{width:"190px"}} ></Input>
            </Form.Item >
              </Col>
              <Col span={12} >
              <Form.Item style={{marginBottom:"10px"}} name="headerShowStatusStampCheck" initialValue={false} valuePropName="checked">
                <Checkbox >Show Status Stamp</Checkbox>
              </Form.Item>
              </Col>
            </Row>
            <Form.Item name="headerImageVisible" initialValue={false} valuePropName={"checked"} style={{visibility:"hidden"}}>
            <Checkbox/>
          </Form.Item>
        </div>
      </Form>
      </>
      
  )
}

export default Header