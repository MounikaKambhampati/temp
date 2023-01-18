import React, { useContext, useEffect, useState } from 'react';
import { Button, Menu,Row,Col, Form ,Input,Radio,InputNumber,Select,Checkbox,Card,Table,Space,Popover} from 'antd';
import { TemplateData } from "../index";
import "antd/dist/antd.css";


import { HexColorPicker } from "react-colorful";


const ItemTable = ()=>{

    const [form] = Form.useForm()

    const [layoutType, setLayoutType] = useState("labels");

    const [tableBorderColor,setTableBorderColor] = useState("#ffffff");
    const [tableItemFontColor,setTableItemFontColor] = useState("#ffffff");
    const [tableItemDescriptionFontColor,setTableItemDescriptionFontColor] = useState("#ffffff");
    const [tableBorderFontColor,setTableBorderFontColor] = useState("#ffffff");
    const [tableHeaderColor,setTableHeaderColor] = useState("#ffffff");
    const [tableItemBorderColor,setTableItemBorderColor] = useState("#ffffff");
    //const {setItemTableData} = useContext(TemplateData)
//alert("item")
    const onChangeData=()=>{
      let formData = form.getFieldsValue(true)
      form.setFieldsValue(formData)
      setTableBorderColor(formData.tableBorderColorPicker)
      setTableHeaderColor(formData.tableHeaderColorPicker)
      setTableBorderFontColor(formData.tableBorderFontColorPicker) 
      setTableItemBorderColor(formData.tableItemBorderColorPicker)
      setTableItemFontColor(formData.tableItemFontColorPicker) 
      setTableItemDescriptionFontColor(formData.tableItemDescriptionFontColorPicker)
      //setItemTableData(formData)
    }


    return(
        <>
        <Form form={form}  layout="vertical" name="form" onValuesChange={onChangeData}>
        <div style={{marginLeft:"8px",borderRight:"9px solid #E4E4E4"}}>
         <div >
                <h1>Item Table</h1>
            </div>
            <div style={{marginLeft:"12px",marginTop:"20px",marginBottom:"25px"}}>
              <Button onClick={()=>setLayoutType("labels")} style={{height:"42px",width:"102px",backgroundColor:`${layoutType === "labels" ? "#1ABC9C" : "#E4E4E4"}`,marginRight:"15px"}}>Labels</Button>
              <Button onClick={()=>setLayoutType("layout")} style={{height:"42px",width:"102px",backgroundColor:`${layoutType === "layout" ? "#1ABC9C" : "#E4E4E4"}`}}>Layout</Button>
            </div>
           {
            layoutType === "labels" ? 
            <>
             <Row style={{borderBottom:"1px solid #E4E4E4 ",marginLeft:"12px",paddingBottom:"5px"}}>
            <Col span={8}></Col>
            <Col span={7}>Width(%)</Col>
            <Col span={9}>Label</Col>
            </Row>  
            <Row style={{marginLeft:"12px",paddingBottom:"5px",marginTop:"15px"}}>
            <Col span={8}>
              <Form.Item name="symbol"  initialValue={true} valuePropName="checked">
                <Checkbox>Line Item Number</Checkbox>
              </Form.Item>
              <Form.Item name="item"  initialValue={true} valuePropName="checked">
                <Checkbox>Item</Checkbox>
              </Form.Item>
              <Form.Item name="tableDescriptionCheck"  initialValue={true} valuePropName="checked">
                <Checkbox>Description</Checkbox>
              </Form.Item>
              <Form.Item name="tableCustomFieldsCheck"  initialValue={true} valuePropName="checked">
                <Checkbox>Custom Fields</Checkbox>
              </Form.Item>
              <Form.Item name="qty"  initialValue={true} valuePropName="checked">
                <Checkbox>Quantity</Checkbox>
              </Form.Item>
              <Form.Item name="rate"  initialValue={true} valuePropName="checked">
                <Checkbox>Rate</Checkbox>
              </Form.Item>
              <Form.Item name="tax1"  initialValue={true} valuePropName="checked">
                <Checkbox>Tax(%)</Checkbox>
              </Form.Item>
              <Form.Item name="tax"  initialValue={true} valuePropName="checked">
                <Checkbox>Tax Amount</Checkbox>
              </Form.Item>
              <Form.Item name="tableDiscountCheck"  initialValue={true} valuePropName="checked">
                <Checkbox>Discount</Checkbox>
              </Form.Item>
              <Form.Item name="amount"  initialValue={true} valuePropName="checked">
                <Checkbox>Amount</Checkbox>
              </Form.Item>
            </Col>
            <Col span={7} style={{marginTop:"12px"}}>
            <Form.Item name="tableLineItemNumberWidth" initialValue={35}>
                <InputNumber defaultValue={35}/>
              </Form.Item>
              <Form.Item initialValue={195} name="tableItemWidth">
                    <InputNumber defaultValue={195}/>
              </Form.Item>
              <Form.Item initialValue={75} name="tableDescriptionWidth">
                    <InputNumber defaultValue={75}/>
              </Form.Item>
              <Form.Item initialValue={75} name="tableCustomFieldsWidth">
                    <InputNumber defaultValue={75}/>
              </Form.Item>
              <Form.Item initialValue={75} name="tableQuantityWidth">
                    <InputNumber defaultValue={75}/>
              </Form.Item>
              <Form.Item initialValue={75} name="tableRateWidth">
                    <InputNumber defaultValue={75}/>
              </Form.Item>
              <Form.Item initialValue={75} name="tableTax1Width">
                    <InputNumber defaultValue={75}/>
              </Form.Item>
              <Form.Item initialValue={75} name="tableTaxAmountWidth">
                    <InputNumber defaultValue={75}/>
              </Form.Item>
              <Form.Item initialValue={75} name="tableDiscountWidth">
                    <InputNumber defaultValue={75}/>
              </Form.Item>
              <Form.Item initialValue={92} name="tableAmountWidth">
                    <InputNumber defaultValue={92}/>
              </Form.Item>
            </Col>
            <Col span={9} style={{marginTop:"12px"}}>
            <Form.Item initialValue={"#"} name="tableLineItemNumberLabel" >
              <Input style={{width:"140px"}}/>
              </Form.Item>
              <Form.Item initialValue={"Item & Descriptionge"} name="tableItemLabel">
              <Input style={{width:"140px"}}/>
              </Form.Item>
              <Form.Item initialValue={"Description"} name="tableDescriptionLabel">
              <Input style={{width:"140px"}}/>
              </Form.Item>
              <Form.Item initialValue={"%Custom Field Label%"} name="tableCustomFieldsLabel">
              <Input style={{width:"140px"}}/>
              </Form.Item>
              <Form.Item initialValue={"Qty"} name="tableQuantityLabel">
              <Input style={{width:"140px"}}/>
              </Form.Item>
              <Form.Item initialValue={"Rate"} name="tableRateLabel">
              <Input style={{width:"140px"}}/>
              </Form.Item>
              <Form.Item initialValue={"Tax %"} name="tableTax1Label">
              <Input style={{width:"140px"}}/>
              </Form.Item>
              <Form.Item initialValue={"Tax"} name="tableTaxAmountLabel">
              <Input style={{width:"140px"}}/>
              </Form.Item>
              <Form.Item initialValue={""} name="tableDiscountLabel">
              <Input style={{width:"140px"}}/>
              </Form.Item>
              <Form.Item initialValue={"Amount"} name="tableAmountLabel">
              <Input style={{width:"140px"}}/>
              </Form.Item>
            </Col>
            </Row>
            <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"400",marginBottom:"15px"}}>
            For Invoices created from Projects
            </div>
            <Row style={{marginLeft:"12px"}}>
                <Col span={12} >
                <p style={{height:"32px",textAlign:"start"}}>Project Item</p>
                <p style={{height:"32px",textAlign:"start"}}>Project Qty</p>
                <p style={{height:"32px",textAlign:"start",marginTop:"25px"}}>Project Description</p>
                </Col>
                <Col span={12}>
                <Form.Item name="projectItem" initialValue={""}>
              <Input style={{width:"190px"}}></Input>
              </Form.Item>
              <Form.Item name="projectQty"  initialValue={""}>
              <Input style={{width:"190px"}}></Input>
              </Form.Item>
              <Form.Item name="projectDescription"  initialValue={""}>
              <Input style={{width:"190px"}}></Input>
              </Form.Item>
                </Col>
            </Row>
            </> : 
            <>
            <Row style={{marginLeft:"12px",marginTop:'-25px'}}>
                <Col span={10} style={{margin:"auto 0"}}>
                <p >Table Border</p>
                </Col>
                <Col span={1} style={{marginTop:"28px"}}>
            <Form.Item name="tableBorderColorCheck" style={{marginRight:"20px",display:"flex"}} initialValue={false} valuePropName="checked">
              <Checkbox/>
              </Form.Item>
            </Col>

             <Col span={12}>
             <Form.Item name="tableBorderColor" initialValue={tableBorderColor} style={{marginRight:"20px",display:"flex",marginLeft:"10px",marginTop:"30px"}}>
              <Input style={{width:"155px"}}/>
              </Form.Item> 
             </Col>
             <Col span={1} style={{marginTop:"25px"}}>
              <div style={{marginLeft:'-36px',paddingTop:"5px"}}> 
              <Popover 
              content={
                <div >
                  <Form.Item name="tableBorderColorPicker">
                  <HexColorPicker />
                  </Form.Item>
                </div>
              }
               trigger="click" placement="topRight">
              <p style={{height:"30px",width:"32px",backgroundColor:tableBorderColor === undefined ? "#ffffff" : tableBorderColor,border:"1px solid #9E9E9E"}} ></p>
              </Popover>
              </div>
             </Col>
            </Row>
            <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
            Table Header
            </div>
            <Row style={{marginLeft:"12px"}}>
            <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Size</p>
                </Col>
                <Col span={14}>
                <Form.Item name="tableFontSize" initialValue="">
              <Input style={{width:"210px"}}></Input>
              </Form.Item>
                </Col>
                <Col span={10} style={{height:"56px",marginTop:"-10px"}}>
                <p >Background Color</p>
                </Col>
                <Col span={1} style={{height:"56px"}}>
            <Form.Item name="tableHeaderColorCheck" style={{marginRight:"20px",display:"flex"}} >
              <Checkbox/>
              </Form.Item>
            </Col>
                <Col span={12} style={{height:"56px"}}>
             <Form.Item name="tableHeaderColor" initialValue={tableHeaderColor} style={{marginRight:"20px",display:"flex",marginLeft:"10px"}}>
              <Input style={{width:"155px"}}/>
              </Form.Item> 
             </Col>
             <Col span={1} style={{marginTop:"-4px"}}>
              <div style={{marginLeft:'-36px',paddingTop:"5px"}}> 
              <Popover 
              content={
                <div >
                   <Form.Item name="tableHeaderColorPicker">
                   <HexColorPicker />
                   </Form.Item>
                </div>
              }
               trigger="click" placement="topRight">
              <p style={{height:"30px",width:"32px",backgroundColor:tableHeaderColor=== undefined ? "#ffffff" : tableHeaderColor,border:"1px solid #9E9E9E"}} ></p>
              </Popover>
              </div>
             </Col>
                <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Color</p>
                </Col>
                <Col span={13}>
             <Form.Item name="tableBorderFontColor" initialValue={tableBorderFontColor} style={{marginRight:"20px",display:"flex"}}>
              <Input style={{width:"185px"}}/>
              </Form.Item> 
             </Col>
             <Col span={1} style={{marginTop:"-4px"}}>
              <div style={{marginLeft:'-36px',paddingTop:"5px"}}> 
              <Popover 
              content={
                <div >
                  <Form.Item name="tableBorderFontColorPicker">
                  <HexColorPicker/>
                    </Form.Item> 
                </div>
              }
               trigger="click" placement="topRight">
              <p style={{height:"30px",width:"32px",backgroundColor:tableBorderFontColor=== undefined ? "#ffffff" : tableBorderFontColor,border:"1px solid #9E9E9E"}}></p>
              </Popover>
              </div>
             </Col>
            </Row>
            <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
            Item Row
            </div>
            <Row style={{marginLeft:"12px"}}>
            <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Size</p>
                </Col>
                <Col span={14}>
                <Form.Item name="tableItemFontSize" initialValue="">
              <Input style={{width:"210px"}}></Input>
              </Form.Item>
                </Col>
                <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Background Color</p>
                </Col>
                <Col span={1} style={{height:"56px"}}>
            <Form.Item name="tableItemColorCheck" style={{marginRight:"20px",display:"flex"}}  initialValue={false} valuePropName="checked">
              <Checkbox/>
              </Form.Item>
            </Col>
                <Col span={12} style={{height:"56px"}}>
             <Form.Item name="tableItemBorderColor" initialValue={tableItemBorderColor} style={{marginRight:"20px",display:"flex",marginLeft:"10px"}}>
              <Input style={{width:"155px"}}/>
              </Form.Item> 
             </Col>
             <Col span={1} style={{marginTop:"-4px"}}>
              <div style={{marginLeft:'-36px',paddingTop:"5px"}}> 
              <Popover 
              content={
                <div >
                  <Form.Item name="tableItemBorderColorPicker">
                  <HexColorPicker/>
                  </Form.Item>
                </div>
              }
               trigger="click" placement="topRight">
              <p style={{height:"30px",width:"32px",backgroundColor:tableItemBorderColor === undefined ? "#ffffff" : tableItemBorderColor,border:"1px solid #9E9E9E"}} ></p>
              </Popover>
              </div>
             </Col>
                <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Color</p>
                </Col>
                <Col span={13}>
             <Form.Item name="tableItemFontColor" initialValue={tableItemFontColor} style={{marginRight:"20px",display:"flex"}}>
              <Input style={{width:"185px"}}/>
              </Form.Item> <Col span={14}>
                   <Form.Item >
                 <Input style={{width:"210px"}}></Input>
                 </Form.Item>
                   </Col>
             </Col>
             <Col span={1} style={{marginTop:"-4px"}}>
              <div style={{marginLeft:'-36px',paddingTop:"5px"}}> 
              <Popover 
              content={
                <div >
                  <Form.Item name="tableItemFontColorPicker">
                  <HexColorPicker/>
                    </Form.Item> 
                </div>
              }
               trigger="click" placement="topRight">
              <p style={{height:"30px",width:"32px",backgroundColor:tableItemFontColor === undefined ? "#ffffff" : tableItemFontColor,border:"1px solid #9E9E9E"}}></p>
              </Popover>
              </div>
             </Col>
            </Row>
            <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
            Item Description
            </div>
            <Row style={{marginLeft:"12px"}}>
            <Col span={10} >
                <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Size</p>
                </Col>
                <Col span={14}>
                <Form.Item name="tableDescriptionFontSize"initialValue="" >
              <Input style={{width:"210px"}}></Input>
              </Form.Item>
                </Col>
                <Col span={10} >
                <p style={{height:"32px",textAlign:"start"}}>Font Color</p>
                </Col>
                <Col span={13}>
             <Form.Item name="tableItemDescriptionFontColor" initialValue={tableItemDescriptionFontColor} style={{marginRight:"20px",display:"flex"}}>
              <Input style={{width:"185px"}}/>
              </Form.Item> 
             </Col>
             <Col span={1} style={{marginTop:"-4px"}}>
              <div style={{marginLeft:'-36px',paddingTop:"5px"}}> 
              <Popover 
              content={
                <div >
                  <Form.Item name="tableItemDescriptionFontColorPicker">
                  <HexColorPicker/>
                  </Form.Item>
                </div>
              }
               trigger="click" placement="topRight">
              <p style={{height:"30px",width:"32px",backgroundColor:tableItemDescriptionFontColor === undefined ? "#ffffff" : tableItemDescriptionFontColor,border:"1px solid #9E9E9E"}} ></p>
              </Popover>
              </div>
             </Col>
            </Row>
            </>
           }
          </div>
        </Form>
        </>
        
    )
}

export default ItemTable