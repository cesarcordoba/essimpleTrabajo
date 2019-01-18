import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { AWSKEYS, APILOCAL } from '../../environments/environment';
import { Observable } from 'rxjs';
import * as axios from 'axios'

@Injectable()   
export class AWSService {

    private FOLDER: string;
    private bucketName: string;
    private bucket = new S3({
        accessKeyId: AWSKEYS.accessKeyId,
        secretAccessKey: AWSKEYS.secretAccessKey,
        region: AWSKEYS.region
    });

    private linkUpload: Observable<Array<string>  | boolean>;
    private borradoArchivo: Observable< boolean>;

    constructor(){
        this.FOLDER = 'imagenes/';
        this.bucketName = 'bull-imagenes';
    }

    /**
     * 
     * @param archivo Archhivo del tipo File
     * @param bucket Nombre del bucket, del tipo string: sintaxis: 'bucket-name'
     * @param folder Nombre de la carpeta, del tipo string: sintaxis: 'imagenes/'
     */
    subirArchivo(archivo: File, bucket: string, folder: string): Observable<Array<string> | boolean>{

        const params: S3.PutObjectRequest = {
            Bucket: bucket,
            Key: folder + archivo.name,
            Body: archivo,
            ACL: 'public-read'
        }

        this.linkUpload = new Observable(observar => {
            observar.next(true)
            this.bucket.upload(params, (err, data) => {
                if (err) {
                    console.log('There was an error uploading your file: ', err);
                    observar.next(false)
                    return false;
                  }
             
                  console.log('Successfully uploaded file.', data);
                  observar.next([data.Location, data.Key])
                  return true;
            })
        })
        return this.linkUpload
    }

    /**
     * 
     * @param nombreArvhi key del archivo, del tipo string
     * @param bucket Nombre del bucket, del tipo string: sintaxis: 'bucket-name'
     * @param folder Nombre de la carpeta, del tipo string: sintaxis: 'imagenes/'
     */

    borrarArchivo(key: string, bucket: string, folder: string): Observable< boolean>{
        const params: S3.PutObjectRequest = {
            Bucket: bucket,
            Key: key
        }

        this.borradoArchivo = new Observable(observar => {
            this.bucket.deleteObject(params, (err, data)=> {
                if(err){
                    console.log('There was an error deleting your file: ', err);
                    observar.next(false)
                    return false;
                }
                console.log(data)
                observar.next(true)
                
            })
        })

        return this.borradoArchivo;
    }

    froala() {
        return axios.default.get(APILOCAL.url + '/froalahash').then(response => response.data);
    }

}