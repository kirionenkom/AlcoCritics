import { Upload, Form, UploadFile } from 'antd';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';
import React, { Dispatch, SetStateAction, useState } from 'react';

const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e && e.fileList;
};

interface UploadImageProps {
	setFile: Dispatch<SetStateAction<any>>;
	image: string | undefined;
}

export default function UploadImage({ setFile, image }: UploadImageProps) {
	const fileList = Array<UploadFile>({
		uid: '-1',
		name: 'image.png',
		status: 'done',
		url: image,
	});
	return (
		<Form.Item
			label="Изображение"
			valuePropName="fileList"
			getValueFromEvent={normFile}
			required
			rules={[{ required: true }]}
		>
			<Upload
				listType="picture-card"
				accept="image/png, image/jpeg, image/jpg"
				maxCount={1}
				defaultFileList={image ? fileList : []}
				customRequest={async (req) => {
					const formData = new FormData();
					formData.append('image', req.file);
					const res = await axios.post(
						process.env.NEXT_PUBLIC_API_URL + '/upload',
						formData
					);
					if (res) {
						setFile(res.data);
						// @ts-ignore
						req.onSuccess();
					}
				}}
			>
				<div>
					<PlusOutlined />
					<div style={{ marginTop: 8 }}>Upload</div>
				</div>
			</Upload>
		</Form.Item>
	);
}
