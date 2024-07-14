'use client';

import moment from 'moment';
import { useEffect, useState } from 'react';

interface Career {
    baseDate: string;
}

const useCareer = () => {
    const [careerTime, setCareerTime] = useState('');

    useEffect(() => {
        const t1 = moment('2023-07-10');
        const t2 = moment();
        const diffTime = {
            year: moment.duration(t2.diff(t1)).years(),
            month: moment.duration(t2.diff(t1)).months(),
        };

        setCareerTime(`${diffTime.year}년 ${diffTime.month}개월`);
    }, []);

    return { careerTime };
};

export default useCareer;
