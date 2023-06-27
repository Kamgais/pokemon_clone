import {formatDate} from "./format-date";


test('should be a formated string',()=>{
    const date1 = new Date('December 17, 1995 03:24:00');
    const date2 = formatDate(date1);
    expect(date2).toBe('17/12/1995');
})