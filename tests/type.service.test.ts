import TypeService from '../type/services/type.service';
import { TriangleDto } from '../type/dto/triangle.dto';

describe('TypeService', () => {
    test('should identify an equilateral triangle', async () => {
        const triangle: TriangleDto = { sideA: 3, sideB: 3, sideC: 3 };
        const result = await TypeService.getTriangleType(triangle);
        console.log(result);
        expect(result).toBe('EQUILATERAL');
    });

    test('should identify an ISOCELES triangle', async () => {
        const triangle: TriangleDto = { sideA: 3, sideB: 3, sideC: 4 };
        const result = await TypeService.getTriangleType(triangle);
        expect(result).toBe('ISOCELES');
    });

    test('should identify a scalene triangle', async () => {
        const triangle: TriangleDto = { sideA: 3, sideB: 4, sideC: 5 };
        const result = await TypeService.getTriangleType(triangle);
        expect(result).toBe('SCALENE');
    });

    
});
