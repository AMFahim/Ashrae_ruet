import Link from 'next/link';
import React from 'react';

const OurServices = () => {
    return (
        <div className='mx-5 md:mx-20 mt-8'>
            <h2 className='text-xl font-semibold '>All Sections</h2>
            <div className='grid grid-cols-3 gap-3 mt-3'>
                <Link href={"/gallery"}><button className="btn btn-outline w-full">Gallery</button>
                </Link>
                <Link href={"/membership"}><button className="btn btn-outline w-full"> Members</button>
                </Link>
                <Link href={"/gallery"}><button className="btn btn-outline w-full">Join us</button>
                </Link>
                <Link href={"/newsupdates"}><button className="btn btn-outline w-full">Notice and Updates</button>
                </Link>
                <Link href={"/events"}><button className="btn btn-outline w-full">Events</button>
                </Link>
                <Link href={"/about"}><button className="btn btn-outline w-full">About Us</button>
                </Link>
            </div>
        </div>
    );
};

export default OurServices;