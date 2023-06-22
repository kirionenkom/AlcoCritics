import {Upload, Form} from "antd";
import axios from "axios";
import {PlusOutlined} from "@ant-design/icons";
import React, {Dispatch, SetStateAction} from "react";

const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e && e.fileList;
};

interface UploadImageProps {
	setFile: Dispatch<SetStateAction<any>>
}

export default function UploadImage({setFile}: UploadImageProps) {
	return (
		<Form.Item
		name="image_path"
		label="Изображение"
		valuePropName="fileList"
		getValueFromEvent={normFile}
		required
		rules={[{ required: true }]}>
			<Upload
				listType="picture-card"
				accept="image/png, image/jpeg, image/jpg"
				maxCount={1}
				customRequest={async (req) => {
					const formData = new FormData()
					formData.append('image', req.file)
					const res = await axios.post('http://localhost:8080/api/upload', formData)
					if (res) {
						setFile(res.data)
						// @ts-ignore
						req.onSuccess()
					}
				}}>
				<div>
					<PlusOutlined />
					<div style={{ marginTop: 8 }}>Upload</div>
				</div>
			</Upload>
		</Form.Item>
	);
}