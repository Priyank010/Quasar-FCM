from pyfcm import FCMNotification

push_service = FCMNotification(api_key="AAAAPoGxwzA:APA91bGFcbHUup26FDi1rAkyUGs6Tcr_WlgkgOQp2vw7qFe4VYPTPBK3-dEh1iZQmllNTVAMYU80itAFlq4Cy4yDXt4p4niJm1otwnkY_Y7XQfOt9rmyv6yAIjib80zzrtc92nggUNOd")

registration_id = "cHVzxxCMSu2rDQzx_ndEAr:APA91bGaoI8_bNW5YESUcNiNrXWGE82EHoXQ_NdTtxPhz1fIRKcvoGoKUoHWwGgqr_ITst3BAWZuozWABCsTWr2l6UlyyxNbpU0TwDCVqCtQFXiX07waahob3FpZhqnFyZYvnMIp24w6"

message_title = "Test Notification"
message_body = "Testing notification on Desktop."
result = push_service.notify_single_device(registration_id=registration_id, message_title=message_title, message_body=message_body)

print(result)