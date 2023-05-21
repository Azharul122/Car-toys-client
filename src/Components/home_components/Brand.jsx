import React from 'react';
import "./Brand.css/"
import Aos from 'aos';
const Brand = () => {
    Aos.init();
    return (
        <div className='flex gap-5'>
            <div className="brand w-[90%]  md:w-[80%] mx-auto flex gap-5" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <img src="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/i/acme_logo-test_1583268457__90581.original.jpg" alt="" className='[h-200px] w-[200px]' />
                <img src="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/n/arko_logo_1583268926__74598.original.jpg" alt="" className='[h-200px] w-[200px]' />
                <img src="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/f/at%20collections%20logo_1583871076__09337.original.png" alt="" className='[h-200px] w-[200px]' />
                <img src="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/r/autoworld-logo_1583268943__25454.original.jpg" alt="" className='[h-200px] w-[200px]' />
                <img src="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/p/autoart%20logo_1583871102__50960.original.jpg" alt="" className='[h-200px] w-[200px]' />
                <img src="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/c/bburago-diecast-model-toy-cars_1583871875__12750.original.gif" alt="" className='[h-200px] w-[200px]' />
                <img src="" alt="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/u/corgi%20logo_1645116962__99387.original.jpg" className='[h-200px] w-[200px]' />
                <img src="" alt="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/k/csm-diecast-model-toy-cars_1583871906__46372.original.jpg" className='[h-200px] w-[200px]' />
                <img src="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/f/daron%20logo_1583871037__96223.original.png" alt="" className='[h-200px] w-[200px]' />
                <img src="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/q/era%20car%20logo_1645116408__06168.original.png" alt="" className='[h-200px] w-[200px]' />
                <img src="" alt="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/h/diecast%20masters%20logo_1583871552__91226.original.png" className='[h-200px] w-[200px]' />
                <img src="" alt="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/original/f/daron%20logo_1583871037__96223.original.png" className='[h-200px] w-[200px]' />

            </div>
        </div>
    );
};

export default Brand;