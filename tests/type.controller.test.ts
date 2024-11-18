import request from 'supertest';
import app from '../app'; // Asegúrate de exportar la app en `app.ts`

describe('TypeController', () => {
    test('should return equilateral triangle', async () => {
        const response = await request(app)
            .post('/type')
            .send({ sideA: 3, sideB: 3, sideC: 3 });
        expect(response.status).toBe(200);
        expect(response.body.type).toBe('EQUILATERAL');
    });

    test('should return ISOCELES triangle', async () => {
        const response = await request(app)
            .post('/type')
            .send({ sideA: 3, sideB: 3, sideC: 4 });
        expect(response.status).toBe(200);
        expect(response.body.type).toBe('ISOCELES');
    });

    test('should handle invalid triangle', async () => {
        const response = await request(app)
            .post('/type')
            .send({ sideA: 0, sideB: 4, sideC: 5 });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Missing required field");
    });
});
