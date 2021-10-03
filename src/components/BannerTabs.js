import {useState} from 'react'
import Tab from '@mui/material/Tab';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import { Box } from '@mui/system';
import { Send, DateRange, CreditCard, Search } from '@mui/icons-material';

function BannerTabs() {
    const [value, setValue] = useState('4');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className='w-full flex flex-col border-b border-gray-400 items-end'>
                    <TabContext value={value}  >
                        <Box sx={{ borderBottom: 1, borderColor:'lightgray'}}>
                            <TabList 
                                onChange={handleChange} 
                                textColor='inherit' 
                                TabIndicatorProps={{
                                    style: {
                                      backgroundColor: "#D97D54"
                                     }
                                }}
                            > 
                                <Tab label="أنشطة أخرى" style={{ fontSize:'18px' }} value="4" />
                                <Tab label="فناذق " style={{ fontSize:'18px' }} value="3" />
                                <Tab label="سيارات " style={{ fontSize:'18px' }} value="2" />
                                <Tab label="طيران" style={{ fontSize:'18px' }} value="1" />
                                
                            </TabList> 
                        </Box>
                    </TabContext>
                </div>
                <TabContext value={value} >
                    <TabPanel value="1">طيران</TabPanel>
                    <TabPanel value="2">سيارات</TabPanel>
                    <TabPanel value="3">فناذق</TabPanel>
                    <TabPanel className="flex w-full h-full" value="4">
                        <div className="flex justify-between xl:justify-around items-center flex-wrap h-full w-full" >
                            <div className="bg-[#f59b14] p-5 rounded-full mx-4 transition duration-200 cursor-pointer hover:bg-[#ecab4a] active:bg-[#e69113]">
                                <Search style={{fontSize: '36px', color: 'white', fontWeight: '200'}} className='text-4xl' />
                            </div>
                            <div className="flex flex-col text-green-600 m-4 items-end space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="text-base font-semibold">الميزانية</p>
                                    <CreditCard className="" />
                                </div>
                                <p className='text-sm text-gray-400'>كم تريد أن تدفع ؟</p>
                            </div>
                            <div className="flex flex-col text-green-600 m-4 items-end space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="text-base font-semibold">الموعد</p>
                                    <DateRange className="" />
                                </div>
                                <p className='text-sm text-gray-400'>أضف موعد محدد</p>
                            </div>
                            <div className="flex flex-col text-green-600 m-4 items-end space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="text-base font-semibold">الوجهة</p>
                                    <Send className="rotate-[220deg] " />
                                </div>
                                <p className='text-sm text-gray-400'>إلى أين تريد الذهاب ؟</p>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
        </>
    )
}

export default BannerTabs
