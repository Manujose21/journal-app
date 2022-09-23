import cloudinaryApi from "@/api/coudinaryApi"
const postImage = async( file ) => {

  try{
    const formData = new FormData()

    formData.append('upload_preset', 'ku5c6cxy')
    
    formData.append('file', file)
    const { data } = await cloudinaryApi.post('/upload', formData)

    return data.secure_url
  }catch(e){
    console.error(e)
    return null
  }
}

export default postImage