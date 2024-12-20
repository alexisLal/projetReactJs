import { ITravel, ITravelDTO } from './travel.types';
import pool from '../config/database';

export const findAll = async (): Promise<any> => {
    const { rows } = await pool.query("SELECT * FROM travel");

    return rows;
}

export const findOne = async (id: number): Promise<ITravel> => {
    const { rows } = await pool.query("SELECT * FROM travel WHERE id = $1", [id]);

    return rows[0];
}

export const create = async (travelDTO: ITravelDTO): Promise<any> => {
    const { rows } = await pool.query("INSERT INTO travel (name, city, country, image, description) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
        travelDTO.name,
        travelDTO.city,
        travelDTO.country,
        travelDTO.image,
        travelDTO.description,
    ]);

    return rows[0];
}

export const update = async (id: number, travelDTO: ITravelDTO): Promise<any> => {
    const { rows } = await pool.query("UPDATE travel SET name=$1, city=$2, country=$3, image=$4, description=$5 WHERE id=$6 RETURNING *", [
        travelDTO.name,
        travelDTO.city,
        travelDTO.country,
        travelDTO.image,
        travelDTO.description,
        id,
    ]);

    return rows;
}

export const remove = async (id: number): Promise<void> => {
    await pool.query("DELETE FROM travel WHERE id=$1", [id]);
}