
import "@ant-design/icons";
import {TableOutlined,CreditCardOutlined,MailOutlined,FileOutlined,AppstoreOutlined} from '@ant-design/icons';
import { Button, Menu,Row,Col, Form ,Input,Radio,InputNumber,Select,Checkbox,Card,Table,Space,Popover} from 'antd';
import TemplateProperties from "../pages/data/Temprops";
//  import { Scrollbars } from "react-custom-scrollbars";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Header from "../pages/data/Head";
import ItemTable from "../pages/data/Item";
import Total from "../pages/data/Total";
import React, { useEffect, useState,createContext } from 'react';
import Footer from "../pages/data/Foo";
import jsPDF from "jspdf";

export const TemplateData = createContext()

  

const App = () => {
  const [isKey,setIsKey] = useState("0");
  const [headerData,setHeaderData] = useState({})
  const [templatePropertiesData,setTemplatePropertiesData] = useState({})
  const [itemTableData,setItemTableData] = useState({})
  const [totalData,setTotalData] = useState({})
  const [isFlag,setIsFlag]  =useState(false)

  const columnsData = [
    {
      title: '#',
      dataIndex: 'symbol',
      key: 'Y',
      width:"35"     
    },
    {
      title: 'Item & Descriptionge',
      dataIndex: 'item',
      key: 'Y',
      width:195
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'Y',
      width:75
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'Y',
      width:75
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'Y',
      width:75
    },
    {
      title: 'Tax %',
      dataIndex: 'tax1',
      key: 'Y',
      width:75 
    },
    {
      title: 'Tax',
      dataIndex: 'tax',
      key: 'Y',
      width:75
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'Y',
      width:75 

    },
  ];
  
  const [columns,setColumns] = useState(columnsData)
  useEffect(()=>{
    let array = [...columns]
    array.map((item)=>{
      if(item.dataIndex=== "symbol"){
        item.width =itemTableData.tableLineItemNumberWidth 
        item.title =itemTableData.tableLineItemNumberLabel === undefined ? "#" : itemTableData.tableLineItemNumberLabel
      }
      if(item.dataIndex=== "item"){
        item.width =itemTableData.tableItemWidth
        item.title =itemTableData.tableItemLabel === undefined ? "Item & Descriptionge" : itemTableData.tableItemLabel
      }
      if(item.dataIndex=== "qty"){
        item.width =itemTableData.tableQuantityWidth
        item.title =itemTableData.tableQuantityLabel  === undefined ? "Qty" :itemTableData.tableQuantityLabel
      }
      if(item.dataIndex=== "rate"){
        item.width =itemTableData.tableRateWidth
        item.title =itemTableData.tableRateLabel === undefined ? "Rate" :itemTableData.tableRateLabel 
      }
     
      if(item.dataIndex=== "tax1"){
        item.width =itemTableData.tableTax1Width
        item.title =itemTableData.tableTax1Label === undefined ? "Tax %" : itemTableData.tableTax1Label

      }
      if(item.dataIndex=== "tax"){
        item.width =itemTableData.tableTaxAmountWidth
        item.title =itemTableData.tableTaxAmountLabel === undefined ? "Tax" : itemTableData.tableTaxAmountLabel
      }
      if(item.dataIndex=== "amount"){
        item.width =itemTableData.tableAmountWidth
        item.title =itemTableData.tableAmountLabel === undefined ? "Amount" : itemTableData.tableAmountLabel
      }
    })
    setColumns(array)
  },[itemTableData])

  const [form] = Form.useForm()
  const {Option} = Select

  const getMenuItem=(item)=>{
    setIsKey(item.key)
  }

  const renderView = ({ style, ...props }) => {
    const viewStyle = {
      color: "#00000",
    };
    return <div className="box" style={{ ...style, ...viewStyle }} {...props} />;
  };

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "#c1c1c1",
      borderRadius: "5px",
      width: "8px",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const dataSource = [
    {
      key: '1',
      symbol: '1',
      item: "Brochure Design",
      qty: '1.00',
      rate: '250',
      discount: '0',
      tax1: "7.2%",
      tax: '25.11',
      amount: '250',
    },
    {
      key: '2',
      symbol: '2',
      item: "Web Design Packages(Template) - Basic",
      qty: '1.00',
      rate: '300',
      discount: '0',
      tax1: "4.70%",
      tax: '11.25',
      amount: '300',
    },
    {
      key: '3',
      symbol: '3',
      item: "Print Ad - Basic - Color",
      qty: '2.00',
      rate: '80',
      discount: '0',
      tax1: "2.1%",
      tax: '10',
      amount: '80',
    }
  ];



 

     

  const fontSize=templatePropertiesData.tempFontSize !== undefined ? `${templatePropertiesData.tempFontSize}px` : "11px"



const print =()=>{
  let text = new jsPDF({  orientation: 'p',unit:'pt',format: 'a4' });
    text.html(document.getElementById('pdf'), {
           callback: function (text) {
   
            text.save('template');
           },
           x: 15,
            y: 15,
            width: 975,
            windowWidth: 1600
       });
}


  return (


      <TemplateData.Provider value={{setHeaderData,setTemplatePropertiesData,setItemTableData,setTotalData}}>
      <Row style={{height:"644px"}}>
        <Col span={1}>
        <div
      style={{
        width: 62,height:644,backgroundColor:"#3c3c47"
      }}
    >
      <Menu
        style={{backgroundColor:"#3c3c47",color:"white"}}
        onClick={getMenuItem}
        defaultSelectedKeys={isKey}
      >
        <Menu.Item style={{padding:"4px 0 9px 0",height:"66px",width:"100%",marginLeft:"0px",backgroundColor: `${isKey === "0" ? "#2f2f38" : "#3c3c47"}`,color: `${isKey === "0" ? "#1abcc" : "white"}`}} key={"0"}>
          <div style={{display:"flex",flexDirection:'column'}}>
         
          <div style={{display:"flex",flexDirection:'column',textAlign:"center",marginLeft:"-2px",fontSize:"10px"}}>
          <FileOutlined />
          <span style={{marginTop:"-10px",marginRight:"10px"}}>Template</span>
          <span style={{marginTop:"-24px"}}>Properties</span>
          </div>
          </div>
        </Menu.Item >
        <Menu.Item style={{padding:"9px 0 0 0",height:"48px",width:"100%",marginLeft:"0px",backgroundColor: `${isKey === "1" ? "#2f2f38" : "#3c3c47"}`,color:`${isKey === "1" ? "#1abcc" : "white"}`,fontSize:"10px"}} key={"1"}>
          <div style={{display:"flex",flexDirection:'column',textAlign:"center"}}>
          <CreditCardOutlined />
          <span style={{marginLeft:"0px",marginTop:"-12px"}}>Header</span>
          </div>
        </Menu.Item>
        <Menu.Item style={{padding:"9px 0 0 0",height:"48px",width:"100%",marginLeft:"0px",backgroundColor: `${isKey === "2" ? "#2f2f38" : "#3c3c47"}`,color:`${isKey === "2" ? "#1abcc" : "white"}`,fontSize:"10px"}} key={"2"}>
          <div style={{display:"flex",flexDirection:'column',textAlign:"center"}}>
          <FileOutlined />
          <span style={{marginLeft:"-2px",marginTop:"-10px"}}>Item Table</span>
          </div>
        </Menu.Item>
        <Menu.Item style={{padding:"9px 0 0 0",height:"48px",width:"100%",marginLeft:"0px",backgroundColor: `${isKey === "3" ? "#2f2f38" : "#3c3c47"}`,color:`${isKey === "3" ? "#1abcc" : "white"}`,fontSize:"10px"}} key={"3"}>
          <div style={{display:"flex",flexDirection:'column',textAlign:"center"}}>
          <TableOutlined />
          <span style={{marginLeft:"-5px",marginTop:"-10px"}}>Total</span>
          </div>
        </Menu.Item>
        <Menu.Item style={{padding:"9px 0 0 0",height:"48px",width:"100%",marginLeft:"0px",backgroundColor: `${isKey === "4" ? "#2f2f38" : "#3c3c47"}`,color:`${isKey === "4" ? "#1abcc" : "white"}`,fontSize:"10px"}} key={"4"}>
          <div style={{display:"flex",flexDirection:'column',textAlign:"center"}}>
          <MailOutlined />
          <span style={{marginLeft:"-5px",marginTop:"-10px"}}>Footer</span>
          </div>
        </Menu.Item>
        <Menu.Item style={{padding:"9px 0 0 0",height:"48px",width:"100%",marginLeft:"0px",backgroundColor: `${isKey === "5" ? "#2f2f38" : "#3c3c47"}`,color:`${isKey === "5" ? "#1abcc" : "white"}`,fontSize:"10px"}} key={"5"}>
          <div style={{display:"flex",flexDirection:'column',textAlign:"center"}}>
          <AppstoreOutlined style={{fontSize:"16px"}}/>
          <span style={{marginLeft:"-4px",marginTop:"-10px"}}>Annexuer</span>
          </div>
        </Menu.Item>
      </Menu>
    </div>
        </Col>
         
        <Col span={8} >
        <Scrollbars
              thumbSize={360}
              renderView={renderView}
              renderThumbVertical={renderThumb}
              style={{ height: "580px"}}
            >
            
              <Form form={form}  layout="vertical" name="form">
              {
                isKey === "0" ? <TemplateProperties form={form}/>: 
                isKey === "1" ? <Header/>:
                isKey === "2" ? <ItemTable/>: 
                isKey === "3" ? <Total/> :
                isKey === "4" ? <Footer/>  : null
              }
              </Form>
              </Scrollbars>
          <div style={{display:"flex",height:"64px",marginLeft:"10px",backgroundColor:"#E4E4E4"}}>
            <Button onClick={print} style={{backgroundColor:"#1ABC9C",color:"white",marginLeft:"16px",
            marginRight:"10px",marginTop:"20px"}}>Save</Button>
            <Button style={{backgroundColor:"#F5F5F5",color:"#212529",marginTop:"20px"}}> Preview</Button>
          
           
          </div>
          </Col>
          
          
        <Col span={15}>
        <Scrollbars
              thumbSize={490}
              renderView={renderView}
              renderThumbHorizontal={renderThumb}
              renderThumbVertical={renderThumb}
              style={{ height: "644px" }}
          >
          
       
            <div style={{padding:"30px 20px 80px 20px",width:"100%"}}>
            <div style={{boxShadow: "0px 1px 3px 2px #00000029",display:"flex",backgroundColor:templatePropertiesData.tempBackgroundColorPicker}}>
                <div id='pdf' style={{height:`${templatePropertiesData.pageSize === "A5" ? "210mm" : "297mm"}`,width:`${templatePropertiesData.pageSize === "A5" ? "148mm" : "210mm"}`,border:"1px solid #9E9E9E",marginTop:templatePropertiesData.marginTop !== undefined ? `${templatePropertiesData.marginTop}px` : "67px",marginLeft:templatePropertiesData.marginLeft !== undefined ?  `${templatePropertiesData.marginLeft}px`  : "67px",marginBottom:templatePropertiesData.marginBottom !== undefined ? `${templatePropertiesData.marginBottom}px`: "38px",marginRight:templatePropertiesData.marginRight !== undefined ? `${templatePropertiesData.marginRight}px`: "38px"}}>
                  <Row style={{borderBottom:"1px solid #9E9E9E",padding:"2px 10px"}}>
                    <Col span={12}style={{display:"flex",alignItems:"center"}}>
                      {headerData.headerImageVisible ? <div >
                      <img alt="image" src={headerData?.orgLogoImage?.file?.response} style={{height:headerData?.slider === undefined ? "40px" : `${headerData?.slider}px` ,width:headerData?.slider === undefined ? "40px" : `${headerData?.slider}px` }}/>
                      </div> : ""}
                      <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",}}>
                      <span style={{fontSize:headerData.headerNameFontSize === undefined ? "16px" : `${headerData.headerNameFontSize}px` ,fontWeight:"500",padding:"3px 0"}}>Name</span>
                      <span style={{fontSize:fontSize,padding:"3px 0"}}> Telangana</span>
                      <span style={{fontSize:fontSize,padding:"3px 0"}}>india </span> 
                      </div>

                    </Col>
                    <Col span={12} style={{textAlign:"right"}}>
                      {headerData.orgTitle === undefined || headerData.orgTitle === true  ? <div style={{fontSize:headerData.headerFontSize === undefined ? "30px" : `${headerData.headerFontSize}px` ,fontWeight:"600px",marginTop:"12px"}}>
                      {headerData.orgTitleString}
                      </div> : null}
                    </Col>
                  </Row>
                  <Row style={{borderBottom:"1px solid #9E9E9E"}}>
                    <Col span={12} style={{borderRight:"1px solid #9E9E9E"}}>
                      <Row>
                        <Col span={12} style={{padding:"0 4px"}}>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #333333",display: headerData.headerNumberFieldCheck === undefined || headerData.headerNumberFieldCheck ? "visible": "hidden"}}>
                            {headerData.headerNumberField === undefined ? "#" : headerData.headerNumberFieldCheck ?  headerData.headerNumberField : ""}
                          </div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #333333",display: headerData.headerDateFieldCheck === undefined || headerData.headerDateFieldCheck ? "visible": "hidden"}}>{headerData.headerDateField === undefined ? "Invoice Date" : headerData.headerDateFieldCheck? headerData.headerDateField : ""}</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #333333",display: headerData.headerTermsCheck === undefined || headerData.headerTermsCheck ? "visible": "hidden"}}>{headerData.headerTerms === undefined ? "Terms" :headerData.headerTermsCheck? headerData.headerTerms : ""}</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #333333",display: headerData.headerDueDateCheck === undefined || headerData.headerDueDateCheck ? "visible": "hidden"}}>{headerData.headerDueDate === undefined ? "Due Date" : headerData.headerDueDateCheck? headerData.headerDueDate : ""}</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #333333",display: headerData.headerReferenceFieldCheck === undefined || headerData.headerReferenceFieldCheck ? "visible": "hidden"}}>{headerData.headerReferenceField === undefined ? "P.O.#" :headerData.headerReferenceFieldCheck? headerData.headerReferenceField : ""}</div>
                        </Col>
                        <Col span={12}>
                        <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>: INV-17</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>: 05/12/2022</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>: Due On Receipt</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>: 05/12/2022</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>: SO-17</div>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12} >
                    <Row>
                        <Col span={12} style={{padding:"0 4px"}}>
                          <div style={{padding:"4px",fontSize:fontSize,fontColor:" #333333"}}>Sales person</div>
                          </Col>
                        <Col span={12}>
                        <div style={{padding:"4px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>: Richard James</div>
                          </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{padding:"4px 5px", backgroundColor:"#f3f3f3f3",borderBottom:"1px solid #9E9E9E"}}>
                  <Col span={12} style={{borderRight:"1px solid #9E9E9E",fontSize:fontSize}}>
                  {  headerData.headerBillToCheck === undefined ||  headerData.headerBillToCheck ?  
                  headerData.headerBillTo === undefined ? "Bill To" : headerData.headerBillTo : null}
                  </Col>
                  <Col span={12} style={{fontSize:fontSize,paddingLeft:"5px"}}>
                  {
                    headerData.headerShipToCheck === undefined ||  headerData.headerShipToCheck ? 
                  headerData.headerShipTo === undefined ? "Ship To" : headerData.headerShipTo : null}
                    </Col>
                  </Row>
                  <Row style={{borderBottom:"1px solid #9E9E9E"}}> 
                        <Col span={12} style={{padding:"3px 4px",borderRight:"1px solid #9E9E9E"}}>
                          <div style={{padding:"4px 5px",fontSize:headerData.headerCustomerFontSize === undefined ? "12px" : `${headerData.headerCustomerFontSize}px`,fontColor:" #333333",fontWeight:"600"}}>Rob & Joe Traders</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #333333"}}>34, Riche Street</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #333333"}}>Chennai</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #333333"}}>631603 Tamil Nadu</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #333333"}}>India</div>
                        </Col>
                        <Col span={12} style={{padding:"3px 5px"}}>
                        <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>34, Riche Street</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>Chennai</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>631603 Tamil Nadu</div>
                          <div style={{padding:"4px 5px",fontSize:fontSize,fontColor:" #000000",fontWeight:"600px"}}>India</div>
                        </Col>
                      </Row>
                  <Row >
                        <Col>
                          <div style={{fontSize:fontSize,fontColor:" #333333",padding:"10px"}}>Subject :</div>
                          <div style={{fontSize:fontSize,fontColor:" #333333",padding:"10px"}}>Description</div>
                          </Col>
                  </Row>
                  <Row>
                    <Table columns={columns} dataSource={dataSource} pagination={false} style={{borderBottom:"1px solid #9E9E9E",width:"100%"}}/>
                  </Row>
                  <Row>
                    <Col span={14} >
                      <div></div>
                    </Col>
                    <Col span={10} style={{border:"1px solid #9E9E9E",borderRight:"0px solid #9E9E9E",borderTop:"0px solid #9E9E9E",paddingBottom:"20px"}}>
                      <Row>
                        <Col span={14} style={{textAlign:"end", }}>
                          <div style={{margin:"8px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker,visibility:totalData.totalSubTotalCheck === undefined || totalData.totalSubTotalCheck  ?"visible": "hidden"}}> {totalData.totalSubTotal === undefined ? "Sub Total" : totalData.totalSubTotal }</div>
                          <div style={{padding:"8px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker}}>Sample Tax1 (4.70%)	</div>
                          <div style={{padding:"8px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker}}>Sample Tax2 (7.00%)	</div>
                          <div style={{padding:"8px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker}}> {totalData.totalTotal === undefined ? "Total" : totalData.totalTotal }</div>
                          <div style={{padding:"8px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker}}>Payment Made	</div>
                          <div style={{padding:"8px 7px 0 4px",fontSize:totalData.totalBalanceDueFontSize === undefined ? "12px" : totalData.totalBalanceDueFontSize,color:totalData.totalBalanceDueFontColorPicker}}>Balance Due	</div>
                        </Col>
                        <Col span={10} style={{textAlign:"end",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize ,color:totalData.setTotalFontColorPicker}}>
                        <div style={{padding:"7px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker}}> 630.00</div>
                          <div style={{padding:"7px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker}}>11.75</div>
                          <div style={{padding:"7px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker}}>21.00</div>
                          <div style={{padding:"7px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker}}>₹662.75</div>
                          <div style={{padding:"7px 7px 0 4px",fontSize:totalData.totalFontSize === undefined ? "11px" : totalData.totalFontSize,color:totalData.setTotalFontColorPicker}}>(-) 100.00</div>
                          <div style={{padding:"7px 7px 0 4px",fontSize:totalData.totalBalanceDueFontSize === undefined ? "12px" : totalData.totalBalanceDueFontSize,color:totalData.totalBalanceDueFontColorPicker}}>₹562.75</div>
                        </Col>
                      </Row>
                    </Col>

                  </Row>
                </div>
            </div>
            </div>
        </Scrollbars>
        </Col>
      </Row>
      </TemplateData.Provider>

    

  );
};
export default App;
