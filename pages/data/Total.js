import React, { useContext, useState } from 'react';
import {
  AppstoreOutlined,
  TableOutlined,
  CreditCardOutlined,
  MailOutlined,
  FileOutlined
} from '@ant-design/icons';
import { HexColorPicker } from "react-colorful";

import { Button, Menu,Row,Col, Form ,Input,Radio,InputNumber,Select,Checkbox,Card,Table,Space,Popover} from 'antd';
import { TemplateData } from "../index";



const Total = ()=>{

  const [form] = Form.useForm()

  const [totalFontColor,setTotalFontColor] = useState("#000000");
  const [totalBackgroundColor,setTotalBackgroundColor] = useState("#ffffff");
  const [totalBalanceDueFontColor,setTotalBalanceDueFontColor] = useState("#000000");
  const [totalBalanceDueBackgroundColor,setTotalBalanceDueBackgroundColor] = useState("#ffffff");
  const [itemLayoutType, setItemLayoutType] = useState("labels");
  const [totalSection,setTotalSection] = useState(true)

  //const {setTotalData} = useContext(TemplateData)

 



  const onChangeData=(data)=>{
      let formData = form.getFieldsValue(true)
      form.setFieldsValue(formData)
      if(Object.keys(data)[0] === "setTotalFontColorPicker"){
          form.setFieldsValue({
              setTotalFontColor:data.setTotalFontColorPicker,
          })
      setTotalFontColor(formData.setTotalFontColorPicker) 

        }else if (Object.keys(data)[0]  === "totalBackgroundColorPicker"){
          form.setFieldsValue({
              totalBackgroundColor:data.totalBackgroundColorPicker ,
          })
          setTotalBackgroundColor(formData.totalBackgroundColorPicker)
        }else if(Object.keys(data)[0]  === "totalBalanceDueFontColorPicker"){
          form.setFieldsValue({
              totalBalanceDueFontColor:data.totalBalanceDueFontColorPicker
          })
      setTotalBalanceDueFontColor(formData.totalBalanceDueFontColorPicker) 
        }else if(Object.keys(data)[0]  === "totalBalanceDueBackgroundColorPicker"){
          form.setFieldsValue({
              totalBalanceDueBackgroundColor:data.totalBalanceDueBackgroundColorPicker
          })
          setTotalBalanceDueBackgroundColor(formData.totalBalanceDueBackgroundColorPicker)
        }
      setTotalSection(formData.totalShowTotalSectionCheck)
      setTotalData(formData)
    }

  return(
      <>
      <Form form={form}  layout="vertical" name="form" onValuesChange={onChangeData}>
      <div style={{marginLeft:"8px",borderRight:"9px solid #E4E4E4"}}>
          <div>
             <h1 >Total</h1>
             </div>
             <div style={{marginLeft:"12px",marginTop:"20px",marginBottom:"25px"}}>
               <Button onClick={()=>setItemLayoutType("labels")} style={{height:"42px",width:"102px",backgroundColor:`${itemLayoutType === "labels" ? "#1ABC9C" : "#E4E4E4"}`,marginRight:"15px"}}>Labels</Button>
               <Button onClick={()=>setItemLayoutType("layout")} style={{height:"42px",width:"102px",backgroundColor:`${itemLayoutType === "layout" ? "#1ABC9C" : "#E4E4E4"}`}}>Layout</Button>
             </div>
            {
              itemLayoutType === "labels" ? 
              <>

             <Row style={{marginLeft:"12px"}}>
             <Col span={10} >
              <Form.Item name="totalShowTotalSectionCheck" initialValue={true} valuePropName="checked">
              <Checkbox>Show Total Section</Checkbox>
              </Form.Item>
                 </Col>
                 <Col span={14}>
                 </Col>
                 {totalSection === undefined || totalSection ?
                  <>
                   <Col span={12} >
                 <Form.Item name="totalSubTotalCheck" initialValue={true} valuePropName="checked">
              <Checkbox>Sub Total</Checkbox>
              </Form.Item>
                 </Col>
                 <Col span={12}>
                 <Form.Item  name="totalSubTotal" initialValue="Sub Total">
               <Input style={{width:"180px"}}></Input>
               </Form.Item>
                 </Col>
                 <Col span={10} >
                 <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Shipping Charges</p>
                 </Col>
                 <Col span={14}>
                 <Form.Item  name="totalShippingCharges" initialValue="">
               <Input style={{width:"210px"}}></Input>
               </Form.Item>
                 </Col>
                 <Col span={10} >
              <Form.Item name="totalDiscountCheck"  initialValue={false} valuePropName="checked">
              <Checkbox>Discount</Checkbox>
              </Form.Item>
                 </Col>
                 <Col span={14}>
                 </Col>
                 <Col span={12} >
                 <Form.Item name="totalTotalTaxableAmountCheck"  initialValue={false} valuePropName="checked">
              <Checkbox>Total Taxable Amount </Checkbox>
              </Form.Item>
                 </Col>
                 <Col span={12}>
                 <Form.Item  name="totalTotalTaxableAmount">
               <Input style={{width:"180px"}}></Input>
               </Form.Item>
                 </Col>
                 <Col span={10} >
              <Form.Item name="totalShowTaxDetailsCheck"  initialValue={false} valuePropName="checked">
              <Checkbox>Show Tax Details</Checkbox>
              </Form.Item>
                 </Col>
                 <Col span={14}>
                 </Col>
                 <Col span={10} >
              <p style={{marginTop:"5px"}}>Total</p>
                 </Col>
                 <Col span={14}>
                  <Form.Item name="totalTotal" initialValue="Total">
                    <Input style={{width:"210px"}}></Input>
                  </Form.Item>
                 </Col>
                 <Col span={10} >
              <p style={{marginTop:"5px"}}>Currency Symbol</p>
                 </Col>
                 <Col span={14}>
                  <Form.Item  name="totalCurrencySymbol" initialValue="beforeAmount">
                    <Radio.Group>
                    <Space direction="vertical">
                    <Radio value="beforeAmount">Before amount</Radio>
                    <Radio value="afterAmount">After amount</Radio>
                    </Space>
                    </Radio.Group>
                  </Form.Item>
                 </Col>
                 <Col span={10} >
              <p style={{marginTop:"5px"}}>Quantity</p>
                 </Col>
                 <Col span={14}>
                 </Col>
                 <Col span={12} >
                  <Form.Item  name="totalShowPaymentDetailsCheck"  initialValue={false} valuePropName="checked">
              <Checkbox>Show Payment Details</Checkbox>
                  </Form.Item>
                 </Col>
                 <Col span={12}>
                 </Col>
                 <Col span={10} >
              <p style={{marginTop:"5px"}}>Payment Made</p>
                 </Col>
                 <Col span={14}>
                  <Form.Item name="totalPaymentMade" initialValue="">
                    <Input style={{width:"210px"}} placeHolder={"Payment Made"}></Input>
                  </Form.Item>
                 </Col>
                 <Col span={10} >
              <p style={{marginTop:"5px"}}>Credits Applied</p>
                 </Col>
                 <Col span={14}>
                  <Form.Item  name="totalCreditsApplied"  initialValue="">
                    <Input style={{width:"210px"}} placeHolder="Credits Applied"></Input>
                  </Form.Item>
                 </Col>
                 <Col span={10} >
              <p style={{marginTop:"5px"}}>Amount Withheld</p>
                 </Col>
                 <Col span={14}>
                  <Form.Item  name="totalAmountWithheld" initialValue="">
                    <Input style={{width:"210px"}} placeHolder="Amount Withheld"></Input>
                  </Form.Item>
                 </Col>
                 <Col span={10} >
              <p style={{marginTop:"5px"}}>Write Off Amount</p>
                 </Col>
                 <Col span={14}>
                  <Form.Item  name="totalWriteOffAmount" initialValue="">
                    <Input style={{width:"210px"}} placeHolder="Write Off Amount"></Input>
                  </Form.Item>
                 </Col>
                 <Col span={10} >
              <p style={{marginTop:"5px"}}>Balance Due</p>
                 </Col>
                 <Col span={14}>
                  <Form.Item  name="totalBalanceDue" initialValue="">
                    <Input style={{width:"210px"}} placeHolder="Balance Due"></Input>
                  </Form.Item>
                 </Col>
                 <Col span={10} >
              <Form.Item name="totalShowAmountInWords" initialValue={false} valuePropName="checked">
              <Checkbox>Show amount in words</Checkbox>
              </Form.Item>
                 </Col>
                 <Col span={14}>
                 </Col>
                  </>
                 : null
                  } 
             </Row>
              </> : 
             <>
             <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
             Total(Subtotal, Tax)
             </div>
             <Row style={{marginLeft:"12px"}}>
             <Col span={10} >
                 <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Size</p>
                 </Col>
                 <Col span={14} >
                 <Form.Item name="totalFontSize" initialValue={11}>
               <InputNumber defaultValue={11} style={{width:"210px"}}></InputNumber>
               </Form.Item >
                 </Col>
                 <Col span={10} >
                 <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Color</p>
                 </Col>
                 <Col span={1} style={{height:"56px"}}>
          <Form.Item name="totalFontColorCheck"  initialValue={false} valuePropName="checked" style={{marginRight:"20px",display:"flex"}} >
            <Checkbox/>
            </Form.Item>
          </Col>
              <Col span={12} style={{height:"56px"}}>
           <Form.Item name="setTotalFontColor" initialValue={totalFontColor} style={{marginRight:"20px",display:"flex",marginLeft:"10px"}}>
            <Input style={{width:"155px"}}/>
            </Form.Item> 
           </Col>
           <Col span={1} style={{marginTop:"-4px"}}>
            <div style={{marginLeft:'-37px',paddingTop:"5px"}}> 
            <Popover 
            content={
              <div >
                   <Form.Item name="setTotalFontColorPicker">
                <HexColorPicker />
                   </Form.Item>
              </div>
            }
             trigger="click" placement="topRight">
            <p style={{height:"30px",width:"32px",backgroundColor:totalFontColor === undefined ? "#000000": totalFontColor,border:"1px solid #9E9E9E"}} ></p>
            </Popover>
            </div>
           </Col>

                 <Col span={10} >
                 <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Background Color</p>
                 </Col>
                 <Col span={1} style={{height:"56px"}}>
          <Form.Item name="totalBackgroundColorCheck"  initialValue={false} valuePropName="checked" style={{marginRight:"20px",display:"flex"}} >
            <Checkbox/>
            </Form.Item>
          </Col>
              <Col span={12} style={{height:"56px"}}>
           <Form.Item name="totalBackgroundColor" initialValue={totalBackgroundColor} style={{marginRight:"20px",display:"flex",marginLeft:"10px"}}>
            <Input style={{width:"155px"}}/>
            </Form.Item> 
           </Col>
           <Col span={1} style={{marginTop:"-4px"}}>
            <div style={{marginLeft:'-37px',paddingTop:"5px"}}> 
            <Popover 
            content={
              <div >
                  <Form.Item name="totalBackgroundColorPicker">
                <HexColorPicker />
                  </Form.Item>
              </div>
            }
             trigger="click" placement="topRight">
            <p style={{height:"30px",width:"32px",backgroundColor:totalBackgroundColor=== undefined ? "#ffffff": totalBackgroundColor,border:"1px solid #9E9E9E"}} ></p>
            </Popover>
            </div>
           </Col>
              
             </Row>
             <div style={{marginLeft:"12px",fontSize:"16px",fontWeight:"600",marginBottom:"15px"}}>
             Balance Due
             </div>
             <Row style={{marginLeft:"12px"}}>
             <Col span={10} >
                 <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Size</p>
                 </Col>
                 <Col span={14}>
                 <Form.Item name="totalBalanceDueFontSize" initialValue={12}>
               <InputNumber defaultValue={12} style={{width:"210px"}}></InputNumber>
               </Form.Item>
                 </Col>
                 <Col span={10} >
                 <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Font Color</p>
                 </Col>
                 <Col span={13}>
           <Form.Item name="totalBalanceDueFontColor" initialValue={totalBalanceDueFontColor} style={{marginRight:"20px",display:"flex"}}>
            <Input style={{width:"185px"}}/>
            </Form.Item> 
           </Col>
           <Col span={1} style={{marginTop:"-4px"}}>
            <div style={{marginLeft:'-37px',paddingTop:"5px"}}> 
            <Popover 
            content={
              <div >
                  <Form.Item name="totalBalanceDueFontColorPicker">
                <HexColorPicker />
                  </Form.Item>
              </div>
            }
             trigger="click" placement="topRight">
            <p style={{height:"30px",width:"32px",backgroundColor:totalBalanceDueFontColor=== undefined ? "#000000" :totalBalanceDueFontColor ,border:"1px solid #9E9E9E"}}></p>
            </Popover>
            </div>
           </Col>
           <Col span={10} >
                 <p style={{height:"32px",textAlign:"start",marginTop:"0"}}>Background Color</p>
                 </Col>
                 <Col span={1} style={{height:"56px"}}>
          <Form.Item name="totalBalanceDueBackgroundColorCheck"  initialValue={false} valuePropName="checked" style={{marginRight:"20px",display:"flex"}} >
            <Checkbox/>
            </Form.Item>
          </Col>
              <Col span={12} style={{height:"56px"}}>
           <Form.Item name="totalBalanceDueBackgroundColor" initialValue={totalBalanceDueBackgroundColor} style={{marginRight:"20px",display:"flex",marginLeft:"10px"}}>
            <Input style={{width:"155px"}}/>
            </Form.Item> 
           </Col>
           <Col span={1} style={{marginTop:"-4px"}}>
            <div style={{marginLeft:'-37px',paddingTop:"5px"}}> 
            <Popover 
            content={
              <div >
                   <Form.Item name="totalBalanceDueBackgroundColorPicker">
                <HexColorPicker />
                   </Form.Item>
              </div>
            }
             trigger="click" placement="topRight">
            <p style={{height:"30px",width:"32px",backgroundColor:totalBalanceDueBackgroundColor,border:"1px solid #9E9E9E"}} ></p>
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

export default Total