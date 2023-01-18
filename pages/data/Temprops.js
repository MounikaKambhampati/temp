import React, { useEffect, useState,useContext } from 'react';
import { Button, Menu,Row,Col, Form ,Input,Radio,InputNumber,Select,Checkbox,Card,Table,Space,Popover} from 'antd';


import { TemplateData } from "../index";
import "antd/dist/antd.css";


const TemplateProperties = ()=>{

    const [form] = Form.useForm()

    const [tempBackgroundColor,setTempBackgroundColor] = useState();
    const [tempBackgroundColorVisible,setTempBackgroundColorVisible] = useState(false);
    const [tempLabelColor,setTempLabelColor] = useState();
    const [tempLabelColorVisible,setTempLabelColorVisible] = useState(false);
    const [tempFontColor,setTempFontColor] = useState();
    const [isKey,setIsKey] = useState("0");

    const {setTemplatePropertiesData} = useContext(TemplateData)

    const onChangeData=(data)=>{ 
      let formData = form.getFieldsValue(true)
      form.setFieldsValue(formData)
      setTempBackgroundColor(formData.tempBackgroundColorPicker)
      setTempFontColor(formData.tempFontColorPicker)
      setTempLabelColor(formData.tempLabelColorPicker)
      setTemplatePropertiesData(formData)
      if(Object.keys(data)[0] === "tempBackgroundColorPicker"){
        form.setFieldsValue({
          tempBackgroundColor:data.tempBackgroundColorPicker,
        })
      }else if (Object.keys(data)[0]  === "tempLabelColorPicker"){
        form.setFieldsValue({
          tempLabelColor:data.tempLabelColorPicker ,
        })
      }else if(Object.keys(data)[0]  === "tempFontColorPicker"){
        form.setFieldsValue({
          tempFontColor:data.tempFontColorPicker
        })
      }
    }



    return(
        <>
        <Form form={form}  layout="vertical" name="form" onValuesChange={onChangeData}>
            <div style={{marginLeft:"8px",borderRight:"9px solid gray ",position:"relative'"}}>
            <h1>TemplateProperties</h1>
            <div style={{marginLeft:"12px"}}>
            <Form.Item name="templateName" label="Template Name" style={{marginTop:"25px",width:"365px"}}>
              <Input placeHolder={"Spreadsheet Template"}></Input>
            </Form.Item>
            <Form.Item name="pageSize" initialValue={"A4"} label="Page Size" style={{marginTop:"8px"}}>
            <Radio.Group >
              <Radio value="A5">A5</Radio>
              <Radio value="A4" >A4</Radio>
              <Radio value="Letter" >Letter</Radio>
            </Radio.Group>
            </Form.Item>
            <Form.Item name="orientation" initialValue={"Portrait"} label="Orientation" style={{marginTop:"8px"}}>
            <Radio.Group >
              <Radio value="Portrait"> Portrait</Radio>
              <Radio value="Landscape">Landscape </Radio>
            </Radio.Group>
            </Form.Item>
            <div>Margin</div>
            <div style={{marginTop:"8px",display:"flex"}}>
              <div>
              <Form.Item name="marginTop" initialValue={67}>
                  <InputNumber defaultValue={67} style={{width:"73px",marginRight:"23px",}}/>
              </Form.Item>
              <p style={{fontSize:"11px",marginTop:"-25px",marginLeft:"2px"}}>Top</p>
              </div>
              <div>
              <Form.Item name="marginLeft"   initialValue={67}>
                          <InputNumber defaultValue={67} style={{width:"73px",marginRight:"23px"}}/>
                        </Form.Item>
              <p style={{fontSize:"11px",marginTop:"-25px",marginLeft:"2px"}}>Bottom</p>
              </div>
              <div>
              <Form.Item name="marginTop" initialValue={67}>
                  <InputNumber defaultValue={67} style={{width:"73px",marginRight:"23px",}}/>
              </Form.Item>
              <p style={{fontSize:"11px",marginTop:"-25px",marginLeft:"2px"}}> Left</p>
              </div>
              <div>
              <Form.Item name="marginRight"   initialValue={52}>
                            <InputNumber defaultValue={52} style={{width:"73px"}}/>
                        </Form.Item>
              <p style={{fontSize:"11px",marginTop:"-25px",marginLeft:"2px"}}>Right</p>
              </div>
            </div>

            <Form.Item name="pdf" label="PDF Font" >
            <Select style={{width:"365px"}}></Select>
            </Form.Item>
            <span >Add Attention Content</span>
            <Form.Item style={{marginTop:"16px"}}  initialValue={false} valuePropName="checked">
              <Checkbox>Include Payment Stub</Checkbox>
            </Form.Item>
            <div style={{height:"68px"}}>
              Background Image
            </div>
            <Form.Item name="tempImagePosition" label="Image Position" >
            <Select style={{width:"365px"}} ></Select>
            </Form.Item>
            </div>
            
             <Col span={12}>
              <Form.Item name="tempFontSize"  initialValue={12}>
                <label style={{marginLeft:"10px"}}>fontSize</label>
                <InputNumber defaultValue={12} style={{width:"170px",marginLeft:"10px"}} ></InputNumber>
              </Form.Item>
             </Col>
            

          </div>
        </Form>
        </>
        
    )
}

export default TemplateProperties