<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2023 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace app\adminapi\controller\v1\system;


use app\adminapi\controller\AuthController;
use app\services\system\AppVersionServices;
use think\facade\App;

/**
 *
 * Class AppVersion
 * @package app\adminapi\controller\v1\system
 */
class AppVersion extends AuthController
{
    /**
     * user constructor.
     * @param App $app
     * @param AppVersionServices $services
     */
    public function __construct(App $app, AppVersionServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 版本列表
     * @return \think\Response
     * @author wuhaotian
     * @email 442384644@qq.com
     * @date 2024/4/2
     */
    public function list()
    {
        [$platform] = $this->request->getMore([
            ['platform', '']
        ], true);
        return app('json')->success($this->services->versionList($platform));
    }

    /**
     * 新增版本表单
     * @param $id
     * @return \think\Response
     * @throws \FormBuilder\Exception\FormBuilderException
     * @author wuhaotian
     * @email 442384644@qq.com
     * @date 2024/4/2
     */
    public function crate($id)
    {
        return app('json')->success($this->services->createForm($id));
    }

    /**
     * 保存数据
     * @return \think\Response
     * @author wuhaotian
     * @email 442384644@qq.com
     * @date 2024/4/2
     */
    public function save()
    {
        $data = $this->request->postMore([
            ['id', 0],
            ['version', ''],
            ['platform', 1],
            ['info', ''],
            ['is_force', 1],
            ['url', ''],
            ['is_new', 1],
        ]);
        $id = $data['id'];
        unset($data['id']);
        $this->services->versionSave($id, $data);
        return app('json')->success(100021);
    }

    /**
     * 删除App版本
     * @param $id
     * @return \think\Response
     * @author wuhaotian
     * @email 442384644@qq.com
     * @date 2024/4/2
     */
    public function del($id)
    {
        $this->services->delete($id);
        return app('json')->success('删除成功');
    }
}
