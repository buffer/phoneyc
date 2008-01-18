#!/usr/bin/env python

import os

class ActiveX(object):
    def __init__(self):
        self.clsid = {}
        self.clsid['6EEFD7B1-B26C-440D-B55A-1EC677189F30'] = SonicWallNetExtenderAddRouteEntry()
        self.clsid['8D1636FD-CA49-4B4E-90E4-0A20E03A15E8'] = JetAudioDownloadFromMusicStore()
        self.clsid['D5184A39-CBDF-4A4F-AC1A-7A45A852C883'] = YahooMessengerYVerInfo()
        self.clsid['A47D5315-321D-4DEE-9DB3-18438023193B'] = NessusScanCtrl()
        self.clsid['3E1DD897-F300-486C-BEAF-711183773554'] = NeoTracePro()
        # same lib with different CLSIDs?
        self.clsid['9D39223E-AE8E-11D4-8FD3-00D0B7730277'] = YahooMessengerYwcvwr()
        self.clsid['DCE2F8B1-A520-11D4-8FD0-00D0B7730277'] = YahooMessengerYwcvwr()
        self.clsid['7EC7B6C5-25BD-4586-A641-D2ACBB6629DD'] = YahooMessengerYwcvwr()
        self.clsid['24F3EAD6-8B87-4C1A-97DA-71C126BDA08F'] = YahooMessengerCyft()
     
        self.clsid['7F5E27CE-4A5C-11D3-9232-0000B48A05B2'] = SSReaderPdg2()
        self.clsid['A09AE68F-B14D-43ED-B713-BA413F034904'] = WinZip()
        #self.clsid['9BE8D7B2-329C-442A-A4AC-ABA9D7572602'] = McAfeeScan()
        self.clsid['F3E70CEA-956E-49CC-B444-73AFE593AD7F'] = PPlayer()
        self.clsid['EEDD6FF9-13DE-496B-9A1C-D78B3215E266'] = PPlayer()
        self.clsid['5EC7C511-CD0F-42E6-830C-1BD9882F3458'] = PPlayer()
        self.clsid['D27CDB6E-AE6D-11CF-96B8-444553540000'] = Flash()
        self.clsid['6BE52E1D-E586-474F-A6E2-1A85A9B4D9FB'] = PPStream()
        self.clsid['FDC7A535-4070-4B92-A0EA-D9994BCC0DC5'] = RealPlayer()
        self.clsid['5D86DDB5-BDF9-441B-9E9E-D4730F4EE499'] = BitDefender()
        self.clsid['E23FE9C6-778E-49D4-B537-38FCDE4887D8'] = VLC()
        self.clsid['62DDEB79-15B2-41E3-8834-D3B80493887A'] = HPInfo()
        self.clsid['7CB9D4F5-C492-42A4-93B1-3F7D6946470D'] = HPInfo()
        self.clsid['A7CD2320-6117-11D7-8096-0050042A4CD2'] = MSVFP()
        self.clsid['3B7C8860-D78F-101B-B9B5-04021C009402'] = MSRICHTXT()
        self.clsid['B617B991-A767-4F05-99BA-AC6FCABB102E'] = MSRICHTXT()
        self.clsid['77829F14-D911-40FF-A2F0-D11DB8D6D0BC'] = NCTAudioFile2()
        self.clsid['2253F320-AB68-4A07-917D-4F12D8884A06'] = StreamAudioChainCast()
        self.clsid['93CEA8A4-6059-4E0B-ADDD-73848153DD5E'] = GatewayWeblaunch()
        self.clsid['D64CF6D4-45DF-4D8F-9F14-E65FADF2777C'] = DVRHOSTWeb()
        self.clsid['D050D736-2D21-4723-AD58-5B541FFB6C11'] = DivX()
	self.clsid['7C3B01BC-53A5-48A0-A43B-0C67731134B9'] = IMWebControl()
	self.clsid['E008A543-CEFB-4559-912F-C27C2B89F13B'] = Domino()
	self.clsid['3BFFE033-BF43-11d5-A271-00A024A51325'] = Domino()
	self.clsid['983A9C21-8207-4B58-BBB8-0EBC3D7C5505'] = Domino()
	self.clsid['E87F6C8E-16C0-11D3-BEF7-009027438003'] = XUpload()
	self.clsid['C1908682-7B2C-4AB0-B98E-183649A0BF84'] = AnswerWorks()
	self.clsid['B49C4597-8721-4789-9250-315DFBD9F525'] = AolAmpX()
	self.clsid['FA3662C3-B8E8-11D6-A667-0010B556D978'] = AolAmpX()
	self.clsid['FCED4482-7CCB-4E6F-86C9-DCB22B52843C'] = MacrovisionFlexNet()
	self.clsid['85A4A99C-8C3D-499E-A386-E0743DFF8FB7'] = MacrovisionFlexNet()
	self.clsid['E9880553-B8A7-4960-A668-95C68BED571E'] = MacrovisionFlexNet()
	self.clsid['A86934DA-C3D6-4C1C-BD83-CA4F14B362DE'] = PTZCamPanel()
	self.clsid['F3D0D36F-23F8-4682-A195-74C92B03D4AF'] = QvodCtrl()
	self.clsid['361E6B79-4A69-4376-B0F2-3D1EBEE9D7E2'] = RtspVaPgCtrl()

        self.clsname = {}
        self.clsname['WebViewFolderIcon.WebViewFolderIcon.1'] = WebViewFolderIcon()
        self.clsname['WZFILEVIEW.FileViewCtrl.61'] = WinZip()
        self.clsname['rfcguisink.rfcguisink.1'] = EnjoySAP()
        self.clsname['kweditcontrol.kwedit.1'] = EnjoySAP()
        self.clsname['PPlayer.XPPlayer.1'] = PPlayer()
        self.clsname['IERPCTL.IERPCTL'] = RealPlayer()
        self.clsname['IERPCTL.IERPCTL.1'] = RealPlayer()
        self.clsname['HPInfoDLL.HPInfo.1'] = HPInfo()
        self.clsname['HPRulesEngine.ContentCollection.1'] = HPInfo()
        self.clsname['NCTAudioFile2.AudioFile.1'] = NCTAudioFile2()
        self.clsname['Ccpm.ProxyManager.1'] = StreamAudioChainCast()
        self.clsname['PdvrAtl.PdvrOcx.1'] = DVRHOSTWeb()
	self.clsname['IMWeb.IMWebControl.1'] = IMWebControl()
	self.clsname['awApi4.AnswerWorks.1'] = AnswerWorks()
	self.clsname['QvodInsert.QvodCtrl.1'] = QvodCtrl()
	self.clsname['RtspVaPgDecoder.RtspVaPgCtrl.1'] = RtspVaPgCtrl()

        # set up the pure JScript version
        self.allobj = {}
        self.allobj.update(self.clsid)
        self.allobj.update(self.clsname)

        self.js_body = ''
        self.js_body += '\n//alerts for the honeyclient\n'
        self.js_body += 'var page_alerts = new Array();\n'
        self.js_body += 'function add_alert(arg) { if (page_alerts.indexOf(arg) == -1) {page_alerts.push(arg);}}\n'
        for v in self.allobj.values():
            self.js_body += "\n%s" % v.js_src

        self.js_body += "\n\nfunction ActiveXObject(s) {"
        self.js_body += "\n\tthis.ActiveX = new Array();"

        for k, v in self.allobj.iteritems():
            self.js_body += "\n\tthis.ActiveX['%s'] = new %s();" % (k.upper(), v.classname)

        self.js_body += "\n\n\treturn(this.ActiveX[s.toUpperCase()]);\n}\n"

    def get_obj_by_clsid(self, clsid):
        return self.clsid.get(clsid, False)

    def get_obj_by_clsname(self, clsname):
        return self.clsname.get(name, False)

    def load_js_src(self, fname):
        fname = os.path.join('modules/jscript', fname)
        f = open(fname, 'r')
        r = f.read()
        f.close()
        return r

class SonicWallNetExtenderAddRouteEntry(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('SonicWall_CVE_2007_5603.js')
        self.classname = 'NELaunchCtrl'
        self.cve_id = ('CVE-2007-5603', )
        self.description = 'SonicWall SSL-VPN NetExtender NELaunchCtrl ActiveX control'
    
class JetAudioDownloadFromMusicStore(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('JetAudio_CVE_2007_4983.js')
        self.classname = 'JetAudio'
        self.cvs_id = ('CVE-2007-4983', )
        self.description = 'jetAudio 7.x ActiveX DownloadFromMusicStore() Remote Code Execution'

class YahooMessengerYVerInfo(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('Yahoo_CVE_2007_4515.js')
        self.classname = 'YahooYVerInfo'
        self.cve_id = ('CVE-2007-4515', )
        self.description = 'Yahoo Messenger YVerInfo.dll ActiveX Multiple Remote Buffer Overflow'

class NessusScanCtrl(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('Nessus_ScanCtrl_CVE_2007_4061.js')
        self.classname = 'ScanCtrl'
        self.cve_id = ('CVE-2007-4061', 'CVE-2007-4062', 'CVE-2007-4031',)
        self.description = 'Nessus Vulnerability Scanner ScanCtrl ActiveX Control'

class NeoTracePro(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('NeoTracePro_CVE_2006_6707.js')
        self.classname = 'NeoTracePro'
        self.cve_id = ('CVE-2006-6707', )
        self.description = 'NeoTraceExplorer.NeoTraceLoader ActiveX control (NeoTraceExplorer.dll)'

class YahooMessengerYwcvwr(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('Yahoo_CVE_2007_4391.js')
        self.classname = 'YahooYwcvwr'
        self.cve_id = ('CVE-2007-4391', )
        self.description = 'Yahoo! Messenger Webcam JPEG 2000 ActiveX Control'

class SSReaderPdg2(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('SSReader_CVE_2007_5892.js')
        self.classname = 'SSReaderPdg2'
        self.cve_id = ('CVE-2007-5892', )
        self.description = 'SSReader 4.0 pdg2.dll ActiveX Control'

class WebViewFolderIcon(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('WebViewFolderIcon_CVE_2006_3730.js')
        self.classname = 'WebViewFolderIcon'
        self.cve_id = ('CVE-2006-3730', )
        self.description = 'Microsoft Internet Explorer 6 WebViewFolderIcon ActiveX object'

class WinZip(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('WinZip_CVE_2006_5198.js')
        self.classname = 'WinZipFileView'
        self.cve_id = ('CVE-2006-5198', 'CVE-2006-3890', )
        self.description = 'WinZip WZFileView.FileViewCtrl.61 ActiveX Control'

class McAfeeScan(ActiveX):
    # http://www.milw0rm.com/exploits/3890
    # todo, VBS/Py code
    def __init__(self):
        self.js_src = self.load_js_src('McAfeeScan.js')
        self.classname = 'McAfeeScan'
        self.cve_id = ()
        self.description = 'Mc Afee Viruscan ActiveX Control'
        
class EnjoySAP(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('EnjoySAP.js')
        self.classname = 'EnjoySAP'
        self.cve_id = ('CVE-2007-3606', )
        self.description = 'EnjoySAP ActiveX Control'

class PPlayer(ActiveX):
    # http://www.sebug.net/exploit/2575
    def __init__(self):
        self.js_src = self.load_js_src('PPlayer.js')
        self.classname = 'PPlayer'
        self.cve_id = ('CVE-NOMATCH', 'CVE-2007-5064', )
        self.description = 'Xunlei Thunder ActiveX Control'

class Flash(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('Flash.js')
        self.classname = 'Flash'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'Adobe Flash Player'

class PPStream(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('PPStream.js')
        self.classname = 'PPStream'
        self.cve_id = ('CVE-NOMATCH', '')
        self.description = 'PPStream (PowerPlayer.dll 2.0.1.3829) ActiveX Control'

class RealPlayer(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('RealPlayer.js')
        self.classname = 'RealPlayer'
        self.cve_id = ('CVE-2007-5601', )
        self.description = 'RealMedia RealPlayer Ierpplug.DLL ActiveX Control'

class YahooMessengerCyft(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('YahooCytf.js')
        self.classname = 'YahooCytf'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'Yahoo! Messenger 8.1.0.421 CYFT Object (ft60.dll) ActiveX Control'

class BitDefender(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('BitDefender.js')
        self.classname = 'BitDefender'
        self.cve_id = ('CVE-2007-5775', )
        self.description = 'BitDefender Online Scanner ActiveX Control'

class VLC(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('VLC.js')
        self.classname = 'VLC'
        self.cve_id = ('CVE-2007-4619', 'CVE-2007-6262', )
        self.description = 'VLC ActiveX Control'

class HPInfo(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('HPInfo.js')
        self.classname = 'HPInfo'
        self.cve_id = ('CVE-2007-6506', 'CVE-2007-6331', 'CVE-2007-6332', 'CVE-2007-6333', )
        self.description = 'HP Info Center ActiveX Control'

class MSVFP(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('MSVFP.js')
        self.classname = 'MSVFP'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'Microsoft VFP_OLE_Server'

class MSRICHTXT(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('MSRICHTXT.js')
        self.classname = 'MSRICHTXT'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'Microsoft Rich Textbox Control 6.0 (SP6)'

class NCTAudioFile2(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('NCTAudioFile2.js')
        self.classname = 'NCTAudioFile2'
        self.cve_id = ('CVE-2007-0018', )
        self.description = 'NCTsoft Products NCTAudioFile2 ActiveX Control'

class StreamAudioChainCast(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('StreamAudioChainCast.js')
        self.classname = 'StreamAudioChainCast'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'StreamAudio ChainCast VMR Client Proxy ActiveX Control 3.x'

class GatewayWeblaunch(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('GatewayWeblaunch.js')
        self.classname = 'GatewayWeblaunch'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'Gateway Weblaunch ActiveX Control'

class DVRHOSTWeb(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('DVRHOSTWeb.js')
        self.classname = 'DVRHOSTWeb'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'DVRHOST Web CMS ActiveX Control'

class DivX(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('DivX.js')
        self.classname = 'DivX'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'DivX Player 6.6.0 ActiveX Control'

class IMWebControl(ActiveX):
    def __init__(self):
	self.js_src = self.load_js_src('IMWebControl.js')
	self.classname = 'IMWebControl'
	self.cve_id = ('CVE-2007-6493', 'CVE-2007-6492')
	self.description = 'iMesh 7.x ActiveX control'

class Domino(ActiveX):
    def __init__(self):
	self.js_src = self.load_js_src('Domino.js')
	self.classname = 'Domino'
	self.cve_id = ('CVE-2007-4474', )
	self.description = 'IBM Lotus Domino Web Access Control ActiveX Control'
    
class XUpload(ActiveX):
    def __init__(self):
	self.js_src = self.load_js_src('XUpload.js')
	self.classname = 'XUpload'
	self.cve_id = ('CVE-2007-6530', )
	self.description = 'Persits Software XUpload 2.1.0.1'

class AnswerWorks(ActiveX):
    def __init__(self):
	self.js_src = self.load_js_src('AnswerWorks.js')
	self.classname = 'AnswerWorks'
	self.cve_id = ('CVE-2007-6387', )
	self.description = 'Vantage Linguistics AnswerWorks ActiveX Controls'

class AolAmpX(ActiveX):
    def __init__(self):
	self.js_src = self.load_js_src('AolAmpX.js')
	self.classname = 'AolAmpX'
	self.cve_id = ('CVE-2007-6250', )
	self.description = 'AOL Radio AOLMediaPlaybackControl.exe'

class MacrovisionFlexNet(ActiveX):
    def __init__(self):
	self.js_src = self.load_js_src('MacrovisionFlexNet.js')
	self.classname = 'MacrovisionFlexNet'
	self.cve_id = ('CVE-2007-2419', 'CVE-2007-5660', 'CVE-2007-6654', 'CVE-2007-0321', 'CVE-2007-0328', )
	self.description = 'Macrovision FLEXnet Connect ActiveX Control'

class PTZCamPanel(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('PTZCamPanel.js')
        self.classname = 'PTZCamPanel'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'RTS Sentry Digital Surveillance PTZCamPanel Class'

class QvodCtrl(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('QvodCtrl.js')
        self.classname = 'QvodCtrl'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'Qvod Player QvodCtrl Class ActiveX Control'

class RtspVaPgCtrl(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('RtspVaPgCtrl.js')
        self.classname = 'RtspVaPgCtrl'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'RTSP MPEG4 SP Control'

